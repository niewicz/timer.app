import { Action } from '@ngrx/store';

import { RegisterData, SignInData } from 'angular2-token';
import { IUser } from './auth.interfaces';

export const CREATE_USER = '[Auth] Create User';
export const CREATE_USER_SUCCESS = '[Auth] Create User Success';
export const CREATE_USER_FAILURE = '[Auth] Create User Failure';

export const SIGN_IN_USER = '[Auth] Sign In User';
export const SIGN_IN_USER_SUCCESS = '[Auth] Sign In User Success';
export const SIGN_IN_USER_FAILURE = '[Auth] Sign In User Failure';

export const GET_CURRENT_USER = '[Auth] Get User';
export const GET_CURRENT_USER_SUCCESS = '[Auth] Get User Success';
export const GET_CURRENT_USER_FAILURE = '[Auth] Get User Failure';

export const EDIT_CURRENT_USER = '[Auth] Edit User';
export const EDIT_CURRENT_USER_SUCCESS = '[Auth] Edit User Success';
export const EDIT_CURRENT_USER_FAILURE = '[Auth] Edit User Failure';

export class CreateUserAction implements Action {
  readonly type = CREATE_USER;
  constructor(public payload: RegisterData) {}
}

export class CreateUserSuccessAction implements Action {
  readonly type = CREATE_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class CreateUserFailureAction implements Action {
  readonly type = CREATE_USER_FAILURE;
  constructor(public payload: any) {}
}

export class SignInUserAction implements Action {
  readonly type = SIGN_IN_USER;
  constructor(public payload: SignInData) {}
}

export class SignInUserSuccessAction implements Action {
  readonly type = SIGN_IN_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class SignInUserFailureAction implements Action {
  readonly type = SIGN_IN_USER_FAILURE;
  constructor(public payload: any) {}
}

export class GetCurrentUserAction implements Action {
  readonly type = GET_CURRENT_USER;
}

export class GetCurrentUserSuccessAction implements Action {
  readonly type = GET_CURRENT_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class GetCurrentUserFailureAction implements Action {
  readonly type = GET_CURRENT_USER_FAILURE;
  constructor(public payload: any) {}
}

export class EditCurrentUserAction implements Action {
  readonly type = EDIT_CURRENT_USER;
}

export class EditCurrentUserSuccessAction implements Action {
  readonly type = EDIT_CURRENT_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class EditCurrentUserFailureAction implements Action {
  readonly type = EDIT_CURRENT_USER_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction
  | SignInUserAction
  | SignInUserSuccessAction
  | SignInUserFailureAction
  | GetCurrentUserAction
  | GetCurrentUserSuccessAction
  | GetCurrentUserFailureAction
  | EditCurrentUserAction
  | EditCurrentUserSuccessAction
  | EditCurrentUserFailureAction;
