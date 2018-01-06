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

  tasks$ = this.selectors.getTasks();

  constructor(
    private dispatchers: TasksDispatchers,
    private selectors: TasksSelectors,
  ) {}

  handleSearch(event: string): void {
    this.dispatchers.searchTasks({ q: event });
  }

  handleSelectTask(event: ITask): void {
    console.log('select task');
    this.selectTask.emit(event);
  }

  handleForceClear() {
    this.dispatchers.clearTasks();
  }
}
