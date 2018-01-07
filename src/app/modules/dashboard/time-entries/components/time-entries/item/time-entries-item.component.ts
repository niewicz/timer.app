import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

import { UtilsService } from './../../../../../../core/services/utils.service';
import { TimeEntriesSelectors } from '../../../../shared/time-entries/time-entries.selectors';
import { TimeEntriesDispatchers } from '../../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';
import { IProject } from '../../../../shared/projects/projects.interfaces';
import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-time-entries-item',
  templateUrl: './time-entries-item.component.html',
  styleUrls: ['./time-entries-item.component.scss'],
})
export class TimeEntriesItemComponent {
  showIcons = false;

  @Input() timeEntry: ITimeEntry;

  @Output() updateTask = new EventEmitter<ITask>();
  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();

  get duration() {
    return this.utils.getDuration(this.timeEntry.endAt, this.timeEntry.startAt);
  }

  constructor(private utils: UtilsService) {}

  onMouseenter(): void {
    this.showIcons = true;
  }

  onMouseleave(): void {
    this.showIcons = false;
  }

  handleSelectTask(event: ITask): void {
    this.updateTimeEntry.emit(
      Object.assign({}, this.timeEntry, { taskId: event.id }),
    );
  }

  handleUnassignTask(): void {
    this.updateTimeEntry.emit(
      Object.assign({}, this.timeEntry, { taskId: '' }),
    );
  }

  handleSelectProject(event: IProject): void {
    if (event) {
      this.updateTask.emit(
        Object.assign({}, this.timeEntry.task, { projectId: event.id }),
      );
    } else {
      this.updateTask.emit(
        Object.assign({}, this.timeEntry.task, { projectId: '' }),
      );
    }
  }
}
