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
import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-time-entries-list',
  templateUrl: './time-entries-list.component.html',
})
export class TimeEntriesListComponent {
  @Input() timeEntries: ITimeEntry[];

  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();
  @Output() updateTask = new EventEmitter<ITask>();

  handleUpdateTimeEntry(event: ITimeEntry): void {
    this.updateTimeEntry.emit(event);
  }

  handleUpdateTask(event: ITask): void {
    this.updateTask.emit(event);
  }
}
