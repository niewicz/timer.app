import { Action } from '@ngrx/store';

import {
  ITimeEntriesParams,
  ITimeEntry,
  ITransferTimeEntry,
} from './time-entries.interfaces';

export const GET_TIME_ENTRIES = '[Dahboard] Get Time Entries';
export const GET_TIME_ENTRIES_SUCCESS = '[Dahboard] Get Time Entries Success';
export const GET_TIME_ENTRIES_FAILURE = '[Dahboard] Get Time Entries Failure';

export const UPDATE_TIME_ENTRY = '[Dashboard] Update Time Entry';
export const UPDATE_TIME_ENTRY_SUCCESS =
  '[Dashboard] Update Time Entry Success';
export const UPDATE_TIME_ENTRY_FAILURE =
  '[Dashboard] Update Time Entry Failure';

export const REMOVE_TIME_ENTRY = '[Dashboard] Remove Time Entry';
export const REMOVE_TIME_ENTRY_SUCCESS =
  '[Dashboard] Remove Time Entry Success';
export const REMOVE_TIME_ENTRY_FAILURE =
  '[Dashboard] Remove Time Entry Failure';

export const CREATE_TIME_ENTRY = '[Dashboard] Create Time Entry';
export const CREATE_TIME_ENTRY_SUCCESS =
  '[Dashboard] Create Time Entry Success';
export const CREATE_TIME_ENTRY_FAILURE =
  '[Dashboard] Create Time Entry Failure';

export const UPDATE_CURRENT_TIME_ENTRY =
  '[Dashboard] Update Current Time Entry';
export const UPDATE_CURRENT_TIME_ENTRY_SUCCESS =
  '[Dashboard] Update Current Time Entry Success';
export const UPDATE_CURRENT_TIME_ENTRY_FAILURE =
  '[Dashboard] Update Current Time Entry Failure';

export const STOP_CURRENT_TIME_ENTRY = '[Dashboard] Stop Current Time Entry';
export const STOP_CURRENT_TIME_ENTRY_SUCCESS =
  '[Dashboard] Stop Current Time Entry Success';
export const STOP_CURRENT_TIME_ENTRY_FAILURE =
  '[Dashboard] Stop Current Time Entry Failure';

export const REMOVE_CURRENT_TIME_ENTRY =
  '[Dashboard] Remove Current Time Entry';
export const REMOVE_CURRENT_TIME_ENTRY_SUCCESS =
  '[Dashboard] Remove Current Time Entry Success';
export const REMOVE_CURRENT_TIME_ENTRY_FAILURE =
  '[Dashboard] Remove Current Time Entry Failure';

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

export class UpdateTimeEntryAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY;
  constructor(public payload: ITransferTimeEntry) {}
}

export class UpdateTimeEntrySuccessAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class UpdateTimeEntryFailureAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveTimeEntryAction implements Action {
  readonly type = REMOVE_TIME_ENTRY;
  constructor(public payload: number) {}
}

export class RemoveTimeEntrySuccessAction implements Action {
  readonly type = REMOVE_TIME_ENTRY_SUCCESS;
  constructor(public payload: number) {}
}

export class RemoveTimeEntryFailureAction implements Action {
  readonly type = REMOVE_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export class CreateTimeEntryAction implements Action {
  readonly type = CREATE_TIME_ENTRY;
  constructor(public payload: ITransferTimeEntry) {}
}

export class CreateTimeEntrySuccessAction implements Action {
  readonly type = CREATE_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class CreateTimeEntryFailureAction implements Action {
  readonly type = CREATE_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateCurrentTimeEntryAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY;
  constructor(public payload: ITransferTimeEntry) {}
}

export class UpdateCurrentTimeEntrySuccessAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class UpdateCurrentTimeEntryFailureAction implements Action {
  readonly type = UPDATE_CURRENT_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export class StopCurrentTimeEntryAction implements Action {
  readonly type = STOP_CURRENT_TIME_ENTRY;
  constructor(public payload: ITransferTimeEntry) {}
}

export class StopCurrentTimeEntrySuccessAction implements Action {
  readonly type = STOP_CURRENT_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class StopCurrentTimeEntryFailureAction implements Action {
  readonly type = STOP_CURRENT_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveCurrentTimeEntryAction implements Action {
  readonly type = REMOVE_CURRENT_TIME_ENTRY;
  constructor(public payload: number) {}
}

export class RemoveCurrentTimeEntrySuccessAction implements Action {
  readonly type = REMOVE_CURRENT_TIME_ENTRY_SUCCESS;
}

export class RemoveCurrentTimeEntryFailureAction implements Action {
  readonly type = REMOVE_CURRENT_TIME_ENTRY_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetTimeEntriesAction
  | GetTimeEntriesSuccessAction
  | GetTimeEntriesFailureAction
  | UpdateTimeEntryAction
  | UpdateTimeEntrySuccessAction
  | UpdateTimeEntryFailureAction
  | RemoveTimeEntryAction
  | RemoveTimeEntrySuccessAction
  | RemoveTimeEntryFailureAction
  | CreateTimeEntryAction
  | CreateTimeEntrySuccessAction
  | CreateTimeEntryFailureAction
  | UpdateCurrentTimeEntryAction
  | UpdateCurrentTimeEntrySuccessAction
  | UpdateCurrentTimeEntryFailureAction
  | StopCurrentTimeEntryAction
  | StopCurrentTimeEntrySuccessAction
  | StopCurrentTimeEntryFailureAction
  | RemoveCurrentTimeEntryAction
  | RemoveCurrentTimeEntrySuccessAction
  | RemoveCurrentTimeEntryFailureAction;
