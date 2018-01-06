import { Action } from '@ngrx/store';

import { ITask, ITasksParams } from './tasks.interfaces';

export const GET_TASKS = '[Dahboard] Get Tasks';
export const GET_TASKS_SUCCESS = '[Dahboard] Get Tasks Success';
export const GET_TASKS_FAILURE = '[Dahboard] Get Tasks Failure';

export const SEARCH_TASKS = '[Dashboard] Search Tasks';

export const CREATE_TASK = '[Dashboard] Create Task';
export const CREATE_TASK_SUCCESS = '[Dashboard] Create Task Success';
export const CREATE_TASK_FAILURE = '[Dashboard] Create Task Failure';
export const CLEAR_NEW_TASK = '[Dashboard] Clear New Task';

export const UPDATE_TASK = '[Dashboard] Update Task';
export const UPDATE_TASK_SUCCESS = '[Dashboard] Update Task Success';
export const UPDATE_TASK_FAILURE = '[Dashboard] Update Task Failure';

export const CLEAR_TASKS = '[Dashboard] Clear Tasks';

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

export class SearchTasksAction implements Action {
  readonly type = SEARCH_TASKS;
  constructor(public payload: ITasksParams) {}
}

export class CreateTaskAction implements Action {
  readonly type = CREATE_TASK;
  constructor(public payload: ITask) {}
}

export class CreateTaskSuccessAction implements Action {
  readonly type = CREATE_TASK_SUCCESS;
  constructor(public payload: ITask) {}
}

export class CreateTaskFailureAction implements Action {
  readonly type = CREATE_TASK_FAILURE;
  constructor(public payload: any) {}
}

export class ClearNewTaskAction implements Action {
  readonly type = CLEAR_NEW_TASK;
}

export class UpdateTaskAction implements Action {
  readonly type = UPDATE_TASK;
  constructor(public payload: ITask) {}
}

export class UpdateTaskSuccessAction implements Action {
  readonly type = UPDATE_TASK_SUCCESS;
  constructor(public payload: ITask) {}
}

export class UpdateTaskFailureAction implements Action {
  readonly type = UPDATE_TASK_FAILURE;
  constructor(public payload: any) {}
}

export class ClearTasksAction implements Action {
  readonly type = CLEAR_TASKS;
}

export type Actions =
  | GetTasksAction
  | GetTasksSuccessAction
  | GetTasksFailureAction
  | SearchTasksAction
  | CreateTaskAction
  | CreateTaskSuccessAction
  | CreateTaskFailureAction
  | ClearNewTaskAction
  | UpdateTaskAction
  | UpdateTaskSuccessAction
  | UpdateTaskFailureAction
  | ClearTasksAction;
