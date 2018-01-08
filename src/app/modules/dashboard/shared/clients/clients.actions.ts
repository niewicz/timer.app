import { Action } from '@ngrx/store';

import {
  IClientsParams,
  IClient,
  IClientsResponse,
} from './clients.interfaces';

export const GET_CLIENTS = '[Dahboard] Get Clients';
export const GET_CLIENTS_SUCCESS = '[Dahboard] Get Clients Success';
export const GET_CLIENTS_FAILURE = '[Dahboard] Get Clients Failure';

export const LOAD_MORE_CLIENTS = '[Dahboard] Load More Clients';
export const LOAD_MORE_CLIENTS_SUCCESS = '[Dahboard] Load More Clients Success';
export const LOAD_MORE_CLIENTS_FAILURE = '[Dahboard] Load More Clients Failure';

export const SEARCH_CLIENTS = '[Dashboard] Search Clients';

export const CREATE_CLIENT = '[Dashboard] Craete Client';
export const CREATE_CLIENT_SUCCESS = '[Dashboard] Craete Client Success';
export const CREATE_CLIENT_FAILURE = '[Dashboard] Craete Client Failure';

export const EDIT_CLIENT = '[Dashboard] Edit Client';
export const EDIT_CLIENT_SUCCESS = '[Dashboard] Edit Client Success';
export const EDIT_CLIENT_FAILURE = '[Dashboard] Edit Client Failure';

export const UPDATE_CLIENT = '[Dashboard] Update Client';
export const UPDATE_CLIENT_SUCCESS = '[Dashboard] Update Client Success';
export const UPDATE_CLIENT_FAILURE = '[Dashboard] Update Client Failure';

export const REMOVE_CLIENT = '[Dashboard] Remove Client';
export const REMOVE_CLIENT_SUCCESS = '[Dashboard] Remove Client Success';
export const REMOVE_CLIENT_FAILURE = '[Dashboard] Remove Client Failure';

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

export type Actions =
  | GetClientsAction
  | GetClientsSuccessAction
  | GetClientsFailureAction
  | LoadMoreClientsAction
  | LoadMoreClientsSuccessAction
  | LoadMoreClientsFailureAction
  | SearchClientsAction
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
  | RemoveClientFailureAction;
