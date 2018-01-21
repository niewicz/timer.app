import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IChartData } from '../../../../shared/summaries/summaries.interfaces';

@Component({
  selector: 'timer-summary-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryChartComponent {
  @Input() chartData: IChartData[];
}
