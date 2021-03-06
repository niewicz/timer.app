import { Action } from '@ngrx/store';

import {
  IClientsParams,
  IClient,
  IClientsResponse,
  ISendReportPayload,
} from './clients.interfaces';

export const GET_CLIENTS = '[Dahboard] Get Clients';
export const GET_CLIENTS_SUCCESS = '[Dahboard] Get Clients Success';
export const GET_CLIENTS_FAILURE = '[Dahboard] Get Clients Failure';

export const LOAD_MORE_CLIENTS = '[Dahboard] Load More Clients';
export const LOAD_MORE_CLIENTS_SUCCESS = '[Dahboard] Load More Clients Success';
export const LOAD_MORE_CLIENTS_FAILURE = '[Dahboard] Load More Clients Failure';

export const SEARCH_CLIENTS = '[Dashboard] Search Clients';

export const GET_CLIENT = '[Dashboard] Get Client';
export const GET_CLIENT_SUCCESS = '[Dashboard] Get Client Success';
export const GET_CLIENT_FAILURE = '[Dashboard] Get Client Failure';

export const CREATE_CLIENT = '[Dashboard] Create Client';
export const CREATE_CLIENT_SUCCESS = '[Dashboard] Create Client Success';
export const CREATE_CLIENT_FAILURE = '[Dashboard] Create Client Failure';

export const EDIT_CLIENT = '[Dashboard] Edit Client';
export const EDIT_CLIENT_SUCCESS = '[Dashboard] Edit Client Success';
export const EDIT_CLIENT_FAILURE = '[Dashboard] Edit Client Failure';

export const UPDATE_CLIENT = '[Dashboard] Update Client';
export const UPDATE_CLIENT_SUCCESS = '[Dashboard] Update Client Success';
export const UPDATE_CLIENT_FAILURE = '[Dashboard] Update Client Failure';

export const REMOVE_CLIENT = '[Dashboard] Remove Client';
export const REMOVE_CLIENT_SUCCESS = '[Dashboard] Remove Client Success';
export const REMOVE_CLIENT_FAILURE = '[Dashboard] Remove Client Failure';

export const SEND_REPORT = '[Dashboard] Send Report';
export const SEND_REPORT_SUCCESS = '[Dashboard] Send Report Success';
export const SEND_REPORT_FAILURE = '[Dashboard] Send Report Failure';

export class GetClientsAction implements Action {
  readonly type = GET_CLIENTS;
}

export class GetClientsSuccessAction implements Action {
  readonly type = GET_CLIENTS_SUCCESS;
  constructor(public payload: IClientsResponse) {}
}

export class GetClientsFailureAction implements Action {
  readonly type = GET_CLIENTS_FAILURE;
  constructor(public payload: any) {}
}

export class LoadMoreClientsAction implements Action {
  readonly type = LOAD_MORE_CLIENTS;
}

export class LoadMoreClientsSuccessAction implements Action {
  readonly type = LOAD_MORE_CLIENTS_SUCCESS;
  constructor(public payload: IClientsResponse) {}
}

export class LoadMoreClientsFailureAction implements Action {
  readonly type = LOAD_MORE_CLIENTS_FAILURE;
  constructor(public payload: any) {}
}

export class SearchClientsAction implements Action {
  readonly type = SEARCH_CLIENTS;
  constructor(public payload: IClientsParams) {}
}

export class GetClientAction implements Action {
  readonly type = GET_CLIENT;
  constructor(public payload: number) {}
}

export class GetClientSuccessAction implements Action {
  readonly type = GET_CLIENT_SUCCESS;
  constructor(public payload: IClient) {}
}

export class GetClientFailureAction implements Action {
  readonly type = GET_CLIENT_FAILURE;
  constructor(public payload: any) {}
}

export class CreateClientAction implements Action {
  readonly type = CREATE_CLIENT;
  constructor(public payload: IClient) {}
}

export class CreateClientSuccessAction implements Action {
  readonly type = CREATE_CLIENT_SUCCESS;
  constructor(public payload: IClient) {}
}

export class CreateClientFailureAction implements Action {
  readonly type = CREATE_CLIENT_FAILURE;
  constructor(public payload: any) {}
}

export class EditClientAction implements Action {
  readonly type = EDIT_CLIENT;
  constructor(public payload: number) {}
}

export class EditClientSuccessAction implements Action {
  readonly type = EDIT_CLIENT_SUCCESS;
  constructor(public payload: IClient) {}
}

export class EditClientFailureAction implements Action {
  readonly type = EDIT_CLIENT_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateClientAction implements Action {
  readonly type = UPDATE_CLIENT;
  constructor(public payload: IClient) {}
}

export class UpdateClientSuccessAction implements Action {
  readonly type = UPDATE_CLIENT_SUCCESS;
  constructor(public payload: IClient) {}
}

export class UpdateClientFailureAction implements Action {
  readonly type = UPDATE_CLIENT_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveClientAction implements Action {
  readonly type = REMOVE_CLIENT;
  constructor(public payload: number) {}
}

export class RemoveClientSuccessAction implements Action {
  readonly type = REMOVE_CLIENT_SUCCESS;
  constructor(public payload: number) {}
}

export class RemoveClientFailureAction implements Action {
  readonly type = REMOVE_CLIENT_FAILURE;
  constructor(public payload: any) {}
}

export class SendReportAction implements Action {
  readonly type = SEND_REPORT;
  constructor(public payload: ISendReportPayload) {}
}

export class SendReportSuccessAction implements Action {
  readonly type = SEND_REPORT_SUCCESS;
}

export class SendReportFailureAction implements Action {
  readonly type = SEND_REPORT_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetClientsAction
  | GetClientsSuccessAction
  | GetClientsFailureAction
  | LoadMoreClientsAction
  | LoadMoreClientsSuccessAction
  | LoadMoreClientsFailureAction
  | SearchClientsAction
  | GetClientAction
  | GetClientSuccessAction
  | GetClientFailureAction
  | CreateClientAction
  | CreateClientSuccessAction
  | CreateClientFailureAction
  | EditClientAction
  | EditClientSuccessAction
  | EditClientFailureAction
  | UpdateClientAction
  | UpdateClientSuccessAction
  | UpdateClientFailureAction
  | RemoveClientAction
  | RemoveClientSuccessAction
  | RemoveClientFailureAction
  | SendReportAction
  | SendReportSuccessAction
  | SendReportFailureAction;
