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
    .switchMap((params: ITasksParams) => {
      return this.tasksService
        .getTasks(params)
        .map((tasks: ITask[]) => new tasksActions.GetTasksSuccessAction(tasks))
        .catch((error: any) =>
          Observable.of(new tasksActions.GetTasksFailureAction(error)),
        );
    });

  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
    private store: Store<State>,
  ) {}
}
