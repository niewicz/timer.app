import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TimeEntriesSelectors } from './../../../shared/time-entries/time-entries.selectors';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../shared/time-entries/time-entries.interfaces';

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

  handleLoadMore(): void {
    this.timeEntriesDispatchers.loadMoreTimeEntries();
  }

  handleUpdateTimeEntry(event: ITimeEntry): void {
    console.log('time entries');
    console.log(event);
    this.timeEntriesDispatchers.updateTimeEntry(event);
  }
}
