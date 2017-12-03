import { Action } from '@ngrx/store';

import { ITimeEntriesParams, ITimeEntry } from './time-entries.interfaces';

export const GET_TIME_ENTRIES = '[Dahboard] Get Time Entries';
export const GET_TIME_ENTRIES_SUCCESS = '[Dahboard] Get Time Entries Success';
export const GET_TIME_ENTRIES_FAILURE = '[Dahboard] Get Time Entries Failure';

export class GetTimeEntriesAction implements Action {
  readonly type = GET_TIME_ENTRIES;
}

export class GetTimeEntriesSuccessAction implements Action {
  readonly type = GET_TIME_ENTRIES_SUCCESS;
  constructor(public payload: ITimeEntry[]) {}
}

export class GetTimeEntriesFailureAction implements Action {
  readonly type = GET_TIME_ENTRIES_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetTimeEntriesAction
  | GetTimeEntriesSuccessAction
  | GetTimeEntriesFailureAction;
