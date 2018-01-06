import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';

import { TasksSelectors } from './../../../shared/tasks/tasks.selectors';
import { TasksDispatchers } from './../../../shared/tasks/tasks.dispatchers';
import { ITask } from '../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-select-task',
  templateUrl: './select-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTaskComponent {
  @Input() displayText: string;
  @Input() selectedTask: ITask;
  @Input() navbar: boolean;

  @Output() selectTask = new EventEmitter<ITask>();
  @Output() createTask = new EventEmitter<ITask>();

  tasks$ = this.selectors.getTasks();
  newTask$ = this.selectors.getNewTask();

  constructor(
    private dispatchers: TasksDispatchers,
    private selectors: TasksSelectors,
  ) {}

  handleSearch(event: string): void {
    this.dispatchers.searchTasks({ q: event });
  }

  handleSelectTask(event: ITask): void {
    this.selectTask.emit(event);
  }

  handleCreateTask(event: ITask): void {
    this.dispatchers.createTask(event);
    this.newTask$.subscribe(task => {
      if (task) {
        this.selectTask.emit(task);
        this.dispatchers.clearNewTask();
      }
    });
  }

  handleForceClear(): void {
    this.dispatchers.clearTasks();
  }
}
