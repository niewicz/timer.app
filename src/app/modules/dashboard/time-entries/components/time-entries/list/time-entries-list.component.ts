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
  @Input() isCurrent: boolean;

  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();
  @Output() updateTask = new EventEmitter<ITask>();
  @Output() removeTimeEntry = new EventEmitter<number>();
  @Output() startTimeEntry = new EventEmitter<ITimeEntry>();

  handleUpdateTimeEntry(event: ITimeEntry): void {
    this.updateTimeEntry.emit(event);
  }

  handleUpdateTask(event: ITask): void {
    this.updateTask.emit(event);
  }

  handleRemoveTimeEntry(event: number): void {
    this.removeTimeEntry.emit(event);
  }

  handleStartTimeEntry(event: ITimeEntry): void {
    this.startTimeEntry.emit(event);
  }
}
