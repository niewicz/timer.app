import { TimeEntriesSelectors } from './../../../shared/time-entries/time-entries.selectors';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';

@Component({
  selector: 'timer-time-entries',
  templateUrl: './time-entries.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesComponent {
  timeEntries$ = this.timeEntriesSelectors.getTimeEntries();
  pending$ = this.timeEntriesSelectors.isPending();
  total$ = this.timeEntriesSelectors.getTotal();

  constructor(
    private timeEntriesDispatchers: TimeEntriesDispatchers,
    private timeEntriesSelectors: TimeEntriesSelectors,
  ) {
    this.timeEntriesDispatchers.getTimeEntries();
  }

  handleLoadMore() {
    this.timeEntriesDispatchers.loadMoreTimeEntries();
  }
}
