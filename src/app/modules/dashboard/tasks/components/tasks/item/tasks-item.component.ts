import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-tasks-item',
  templateUrl: './tasks-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksItemComponent {
  @Input() task: ITask;
}
