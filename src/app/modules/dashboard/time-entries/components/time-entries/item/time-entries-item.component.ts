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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesItemComponent {
  showIcons = false;

  @Input() timeEntry: ITimeEntry;

  // @Output() updateProject = new EventEmitter<{id: }>();
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
    console.log('time entries item');
    this.updateTimeEntry.emit(
      Object.assign({}, this.timeEntry, { taskId: event.id }),
    );
  }

  handleSelectProject(event: IProject): void {
    // this.updateProject.emit(event);
  }
}
