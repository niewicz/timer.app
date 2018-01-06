import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as tasksActions from './tasks.actions';
import { State } from '../../../../store/index';
import { ITasksParams, ITask } from './tasks.interfaces';

@Injectable()
export class TasksDispatchers {
  constructor(private store: Store<State>) {}

  public getTasks(): void {
    this.store.dispatch(new tasksActions.GetTasksAction());
  }

  public searchTasks(params: ITasksParams): void {
    this.store.dispatch(new tasksActions.SearchTasksAction(params));
  }

  public createTask(params: ITask): void {
    this.store.dispatch(new tasksActions.CreateTaskAction(params));
  }

  public clearNewTask(): void {
    this.store.dispatch(new tasksActions.ClearNewTaskAction());
  }

  public updateTask(params: ITask): void {
    this.store.dispatch(new tasksActions.UpdateTaskAction(params));
  }

  public clearTasks(): void {
    this.store.dispatch(new tasksActions.ClearTasksAction());
  }
}
