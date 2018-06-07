import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { TasksService } from './tasks.service';
import { ITask, ITasksParams } from './tasks.interfaces';
import * as tasksActions from './tasks.actions';

@Injectable()
export class TasksEffects {
  @Effect()
  getTasks$: Observable<Action> = this.actions$
    .ofType(tasksActions.GET_TASKS)
    .withLatestFrom(this.store, (action, state) => state.tasks.params)
    .switchMap((params: ITasksParams) =>
      this.tasksService
        .getTasks(params)
        .map((tasks: ITask[]) => new tasksActions.GetTasksSuccessAction(tasks))
        .catch((error: any) =>
          Observable.of(new tasksActions.GetTasksFailureAction(error)),
        ),
    );

  @Effect()
  searchTasks$: Observable<Action> = this.actions$
    .ofType(tasksActions.SEARCH_TASKS)
    .map(() => new tasksActions.GetTasksAction());

  @Effect()
  createTask$: Observable<Action> = this.actions$
    .ofType(tasksActions.CREATE_TASK)
    .map((action: tasksActions.CreateTaskAction) => action.payload)
    .switchMap((payload: ITask) =>
      this.tasksService
        .createTask(payload)
        .map((task: ITask) => new tasksActions.CreateTaskSuccessAction(task))
        .catch((error: any) =>
          Observable.of(new tasksActions.CreateTaskFailureAction(error)),
        ),
    );

  @Effect()
  updateTask$: Observable<Action> = this.actions$
    .ofType(tasksActions.UPDATE_TASK)
    .map((action: tasksActions.UpdateTaskAction) => action.payload)
    .switchMap((payload: ITask) =>
      this.tasksService
        .updateTask(payload)
        .map((task: ITask) => new tasksActions.UpdateTaskSuccessAction(task))
        .catch((error: any) =>
          Observable.of(new tasksActions.UpdateTaskFailureAction(error)),
        ),
    );

  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
    private store: Store<State>,
  ) {}
}
