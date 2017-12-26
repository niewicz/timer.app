import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as tasksActions from './tasks.actions';
import { State } from '../../../../store/index';
import { ITasksParams } from './tasks.interfaces';

@Injectable()
export class TasksDispatchers {
  constructor(private store: Store<State>) {}

  public getTasks(): void {
    this.store.dispatch(new tasksActions.GetTasksAction());
  }

  public searchTasks(params: ITasksParams): void {
    this.store.dispatch(new tasksActions.SearchTasksAction(params));
  }

  public clearTasks(): void {
    this.store.dispatch(new tasksActions.ClearTasksAction());
  }
}
