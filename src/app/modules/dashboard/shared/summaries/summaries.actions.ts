import { Action } from '@ngrx/store';

import { IChartData } from './summaries.interfaces';

export const GET_WORKLOAD = '[Dahsboard] Get Workload';
export const GET_WORKLOAD_SUCCESS = '[Dahsboard] Get Workload Success';
export const GET_WORKLOAD_FAILURE = '[Dahsboard] Get Workload Failure';

export class GetWorkloadAction implements Action {
  readonly type = GET_WORKLOAD;
  constructor(public payload: any) {}
}

export class GetWorkloadSuccessAction implements Action {
  readonly type = GET_WORKLOAD_SUCCESS;
  constructor(public payload: IChartData[]) {}
}

export class GetWorkloadFailureAction implements Action {
  readonly type = GET_WORKLOAD_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetWorkloadAction
  | GetWorkloadSuccessAction
  | GetWorkloadFailureAction;
