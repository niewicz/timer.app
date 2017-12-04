import { TasksSelectors } from './../../../shared/tasks/tasks.selectors';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TasksDispatchers } from '../../../shared/tasks/tasks.dispatchers';

@Component({
  selector: 'timer-tasks',
  templateUrl: './tasks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  tasks$ = this.tasksSelectors.getTasks();

  constructor(
    private tasksDispatchers: TasksDispatchers,
    private tasksSelectors: TasksSelectors,
  ) {
    this.tasksDispatchers.getTasks();
  }
}
