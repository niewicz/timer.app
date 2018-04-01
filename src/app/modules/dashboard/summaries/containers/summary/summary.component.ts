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

  constructor(
    private dispatchers: SummariesDispatchers,
    private selectors: SummariesSelectors,
  ) {}

  ngOnInit(): void {
    this.dispatchers.getSummary(null);
    this.dispatchers.getLastProjects();
  }
}
