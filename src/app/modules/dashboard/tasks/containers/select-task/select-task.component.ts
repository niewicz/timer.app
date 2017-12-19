import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';

import { TasksSelectors } from './../../../shared/tasks/tasks.selectors';
import { TasksDispatchers } from './../../../shared/tasks/tasks.dispatchers';
import { ITask } from '../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-select-task',
  templateUrl: './select-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTaskComponent implements OnInit {
  @Output() selectTask = new EventEmitter<ITask>();

  tasks$ = this.selectors.getTasks();

  constructor(
    private dispatchers: TasksDispatchers,
    private selectors: TasksSelectors,
  ) {}

  ngOnInit(): void {
    this.dispatchers.getTasks();
  }

  handleSearch(event: string): void {
    // this.dispatchers.searchTasks(event);
  }

  handleChoice(event: ITask): void {}
}
