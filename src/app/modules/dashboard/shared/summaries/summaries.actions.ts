import { Action } from '@ngrx/store';

import { IChartData, IChartParams } from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';

export const GET_WORKLOAD = '[Dashboard] Get Workload';
export const GET_WORKLOAD_SUCCESS = '[Dashboard] Get Workload Success';
export const GET_WORKLOAD_FAILURE = '[Dashboard] Get Workload Failure';

export const GET_LAST_PROJECTS = '[Dashboard] Get Last Projects';
export const GET_LAST_PROJECTS_SUCCESS =
  '[Dashboard] Get Last Projects Success';
export const GET_LAST_PROJECTS_FAILURE =
  '[Dashboard] Get Last Projects Failure';

export class GetWorkloadAction implements Action {
  readonly type = GET_WORKLOAD;
  constructor(public payload: IChartParams) {}
}

export class GetWorkloadSuccessAction implements Action {
  readonly type = GET_WORKLOAD_SUCCESS;
  constructor(public payload: IChartData[]) {}
}

export class GetWorkloadFailureAction implements Action {
  readonly type = GET_WORKLOAD_FAILURE;
  constructor(public payload: any) {}
}

export class GetLastProjectsAction implements Action {
  readonly type = GET_LAST_PROJECTS;
}

export class GetLastProjectsSuccessAction implements Action {
  readonly type = GET_LAST_PROJECTS_SUCCESS;
  constructor(public payload: IProject[]) {}
}

export class GetLastProjectsFailureAction implements Action {
  readonly type = GET_LAST_PROJECTS_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetWorkloadAction
  | GetWorkloadSuccessAction
  | GetWorkloadFailureAction
  | GetLastProjectsAction
  | GetLastProjectsSuccessAction
  | GetLastProjectsFailureAction;
