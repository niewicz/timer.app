import { Action } from '@ngrx/store';

import { RegisterData, SignInData } from 'angular2-token';
import { IUser, IBillingProfile } from './auth.interfaces';

export const CREATE_USER = '[Auth] Create User';
export const CREATE_USER_SUCCESS = '[Auth] Create User Success';
export const CREATE_USER_FAILURE = '[Auth] Create User Failure';

export const SIGN_IN_USER = '[Auth] Sign In User';
export const SIGN_IN_USER_SUCCESS = '[Auth] Sign In User Success';
export const SIGN_IN_USER_FAILURE = '[Auth] Sign In User Failure';

export const GET_CURRENT_USER = '[Auth] Get User';
export const GET_CURRENT_USER_SUCCESS = '[Auth] Get User Success';
export const GET_CURRENT_USER_FAILURE = '[Auth] Get User Failure';

export const UPDATE_BILLING_PROFILE = '[Auth] Update Billing Profile';
export const UPDATE_BILLING_PROFILE_SUCCESS =
  '[Auth] Update Billing Profile Success';
export const UPDATE_BILLING_PROFILE_FAILURE =
  '[Auth] Update Billing Profile Failure';

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

export class UpdateBillingProfileAction implements Action {
  readonly type = UPDATE_BILLING_PROFILE;
  constructor(public payload: IBillingProfile) {}
}

export class UpdateBillingProfileSuccessAction implements Action {
  readonly type = UPDATE_BILLING_PROFILE_SUCCESS;
  constructor(public payload: IUser) {}
}

export class UpdateBillingProfileFailureAction implements Action {
  readonly type = UPDATE_BILLING_PROFILE_FAILURE;
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
  | UpdateBillingProfileAction
  | UpdateBillingProfileSuccessAction
  | UpdateBillingProfileFailureAction;
