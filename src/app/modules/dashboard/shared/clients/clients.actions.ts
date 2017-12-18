import { Action } from '@ngrx/store';

import { IClientsParams, IClient } from './clients.interfaces';

export const GET_CLIENTS = '[Dahboard] Get Clients';
export const GET_CLIENTS_SUCCESS = '[Dahboard] Get Clients Success';
export const GET_CLIENTS_FAILURE = '[Dahboard] Get Clients Failure';

export const CREATE_CLIENT = '[Dashboard] Craete Client';
export const CREATE_CLIENT_SUCCESS = '[Dashboard] Craete Client Success';
export const CREATE_CLIENT_FAILURE = '[Dashboard] Craete Client Failure';

export class GetClientsAction implements Action {
  readonly type = GET_CLIENTS;
}

export class GetClientsSuccessAction implements Action {
  readonly type = GET_CLIENTS_SUCCESS;
  constructor(public payload: IClient[]) {}
}

export class GetClientsFailureAction implements Action {
  readonly type = GET_CLIENTS_FAILURE;
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

export type Actions =
  | GetClientsAction
  | GetClientsSuccessAction
  | GetClientsFailureAction
  | CreateClientAction
  | CreateClientSuccessAction
  | CreateClientFailureAction;
