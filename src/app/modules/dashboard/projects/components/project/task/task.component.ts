import { Component, Input } from '@angular/core';

import { ITask } from '../../../../shared/tasks/tasks.interfaces';
import { UtilsService } from '../../../../../../core/services/utils.service';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';

@Component({
  selector: 'timer-project-task',
  templateUrl: './task.component.html',
  styleUrls: ['../../../containers/project/project.component.scss'],
})
export class ProjectTaskComponent {
  @Input() task: ITask;

  showTimeEntries = false;

  constructor(private utils: UtilsService) {}

  getDuration(sec: number): string {
    return this.utils.fromSecToFormattedDuration(sec, true);
  }

  getTimeEntryDuration(entry: ITimeEntry): string {
    return this.utils.getDuration(entry.endAt, entry.startAt);
  }

  toggleTimeEntries(): void {
    this.showTimeEntries = !this.showTimeEntries;
  }
}
