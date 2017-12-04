import { Action } from '@ngrx/store';

import { ITask } from './tasks.interfaces';

export const GET_TASKS = '[Dahboard] Get Tasks';
export const GET_TASKS_SUCCESS = '[Dahboard] Get Tasks Success';
export const GET_TASKS_FAILURE = '[Dahboard] Get Tasks Failure';

export class GetTasksAction implements Action {
  readonly type = GET_TASKS;
}

export class GetTasksSuccessAction implements Action {
  readonly type = GET_TASKS_SUCCESS;
  constructor(public payload: ITask[]) {}
}

export class GetTasksFailureAction implements Action {
  readonly type = GET_TASKS_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetTasksAction
  | GetTasksSuccessAction
  | GetTasksFailureAction;