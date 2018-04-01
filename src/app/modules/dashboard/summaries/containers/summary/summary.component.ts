import { Component, OnInit } from '@angular/core';

import { SummariesDispatchers } from '../../../shared/summaries/summaries.dispatchers';
import { SummariesSelectors } from '../../../shared/summaries/summaries.selectors';

@Component({
  selector: 'timer-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  workload$ = this.selectors.getWorkload();
  lastProjects$ = this.selectors.getLastProjects();

  selectedOption: { name: string; value: string };
  menuOptions: { name: string; value: string }[] = [
    { name: 'Last 7 days', value: 'last_7_days' },
    { name: 'This week', value: 'this_week' },
    { name: 'This month', value: 'this_month' },
    { name: 'Last week', value: 'last_week' },
    { name: 'Last month', value: 'last_month' },
  ];

  constructor(
    private dispatchers: SummariesDispatchers,
    private selectors: SummariesSelectors,
  ) {}

  ngOnInit(): void {
    this.dispatchers.getSummary();
    this.dispatchers.getLastProjects();
  }

  onSelectOption(option: { name: string; value: string }) {
    this.selectedOption = option;
    this.dispatchers.getSummary({ timeRange: option.value });
  }
}
