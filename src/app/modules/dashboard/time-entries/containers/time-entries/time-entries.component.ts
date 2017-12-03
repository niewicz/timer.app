import { TimeEntriesSelectors } from './../../../shared/time-entries/time-entries.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';

@Component({
  selector: 'timer-time-entries',
  templateUrl: './time-entries.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesComponent implements OnInit {
  timeEntries$ = this.timeEntriesSelectors.getTimeEntries();
  pending$ = this.timeEntriesSelectors.isPending();

  constructor(
    private timeEntriesDispatchers: TimeEntriesDispatchers,
    private timeEntriesSelectors: TimeEntriesSelectors,
  ) {
    this.timeEntriesDispatchers.getTimeEntries();
  }

  ngOnInit() {
    this.timeEntries$.subscribe(cos => console.log(cos));
  }
}
