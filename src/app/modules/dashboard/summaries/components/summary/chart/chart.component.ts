import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { IChartData } from '../../../../shared/summaries/summaries.interfaces';
import { IChart } from '../../../../../../core/interfaces/chart.interfaces';

@Component({
  selector: 'timer-summary-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryChartComponent {
  @Input() chartData: IChartData[];

  total = 0;

  // chart config
  chart: IChart = {
    type: 'bar',
    legend: false,
    labels: [],
    colors: [
      {
        backgroundColor: '#e45252',
        hoverBackgroundColor: '#ff5252',
        hoverBorderColor: 'transparent',
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 40,
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: '#444444',
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              drawBorder: false,
              color: '#f0f0f0',
              zeroLineWidth: 1,
              zeroLineColor: '#444444',
            },
            ticks: {
              fontColor: '#444444',
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              min: 0,
              stepSize: 3600,
              callback: (dataLabel, index) => {
                return dataLabel % (3 * 3600) === 0
                  ? this.getDuration(dataLabel)
                  : null;
              },
            },
          },
        ],
      },
      tooltips: {
        xPadding: 15,
        yPadding: 5,
        yAlign: 'bottom',
        xAlign: 'center',
        cornerRadius: 0,
        backgroundColor: 'rgba(58, 58, 68, 1)',
        titleFontFamily: 'Roboto, sans-serif',
        titleFontSize: 12,
        titleFontStyle: 'bold',
        callbacks: {
          title: (tooltipItem, data) => {
            return this.getDuration(tooltipItem[0].yLabel);
          },
          label: (tooltipItem, data) => {
            return '';
          },
        },
      },
    },
  };
  // end chart config

  ngOnChanges() {
    if (this.chartData && this.chartData.length > 0) {
      const data = [];
      const labels = [];

      this.chartData.forEach((item: IChartData) => {
        data.push(item.value);
        labels.push(item.name);
      });

      this.chart.data = data;
      this.chart.labels = labels;
      this.total = this.chart.data.reduce((x, y) => x + y);
    }
  }

  getDuration(sec: number, full: boolean = false): string {
    const min = Math.floor(sec / 60) % 60;
    const hour = Math.floor(sec / 3600);

    const partMin = min > 0 ? `${min}min` : '';
    const partHour = hour > 0 ? `${hour}h` : '';

    if (full) {
      return `${hour} hours ${min} minutes`;
    } else {
      return `${partHour} ${partMin}`;
    }
  }
}
