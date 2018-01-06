import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

import { TimeEntriesSelectors } from '../../../../shared/time-entries/time-entries.selectors';
import { TimeEntriesDispatchers } from '../../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';

@Component({
  selector: 'timer-time-entries-list',
  templateUrl: './time-entries-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesListComponent {
  @Input() timeEntries: ITimeEntry[];

  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();

  handleUpdateTimeEntry(event: ITimeEntry): void {
    this.updateTimeEntry.emit(event);
  }
}
