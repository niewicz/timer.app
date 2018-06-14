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
  @Input() timeEntry: ITimeEntry;
  @Input() isCurrent: boolean;

  @Output() updateTask = new EventEmitter<ITask>();
  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();
  @Output() removeTimeEntry = new EventEmitter<number>();
  @Output() startTimeEntry = new EventEmitter<ITimeEntry>();

  showIcons = false;

  startAt: Date;
  endAte: Date;

  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy HH:mm',
    defaultOpen: false,
  };

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

  handleStartAtChange(date: string) {
    this.updateTimeEntry.emit({
      ...this.timeEntry,
      startAt: date,
    });
  }

  handleEndAtChange(date: string) {
    this.updateTimeEntry.emit({
      ...this.timeEntry,
      endAt: date,
    });
  }

  onRemoveTimeEntry(): void {
    this.removeTimeEntry.emit(this.timeEntry.id);
  }

  onContinue(): void {
    this.startTimeEntry.emit({
      taskId: this.timeEntry.taskId,
      startAt: new Date().toString(),
    });
  }
}
