import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';

import { IChartData } from '../../../../shared/summaries/summaries.interfaces';
import { IChart } from '../../../../../../core/interfaces/chart.interfaces';

@Component({
  selector: 'timer-summary-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryChartComponent implements OnChanges {
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
            barPercentage: 0.7,
            ticks: {
              maxRotation: 0,
              maxTicksLimit: 7,
              fontColor: '#444448',
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
              zeroLineColor: '#444448',
            },
            ticks: {
              fontColor: '#444448',
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              min: 0,
              stepSize: 3600,
              callback: (dataLabel, index) => {
                return index % 3 === 0 ? this.getDuration(dataLabel) : null;
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    if (this.chartData && this.chartData.length > 0) {
      this.chart.labels = [];
      this.chart.data = [];
      this.total = 0;
      this.cd.detectChanges();

      const data = [];
      const labels = [];

      this.chartData.forEach((item: IChartData) => {
        data.push(item.value);
        labels.push(item.name);
      });

      this.chart.labels = labels;
      this.chart.data = data;
      this.total = this.chart.data.reduce((x, y) => x + y);
      this.cd.detectChanges();
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
