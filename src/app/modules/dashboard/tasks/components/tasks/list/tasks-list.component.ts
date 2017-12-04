import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-tasks-list',
  templateUrl: './tasks-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  @Input() tasks: ITask[];
}
