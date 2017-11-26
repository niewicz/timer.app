import * as authActions from './auth.actions';

import { IUser } from './auth.interfaces';

export interface AuthState {
  currentUser: IUser;
  pending: boolean;
  errors: any;
}

const initialState: AuthState = {
  currentUser: undefined,
  pending: false,
  errors: undefined,
};

export function reducer(state = initialState, action: authActions.Actions) {
  switch (action.type) {
    case authActions.CREATE_USER:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case authActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
      };
    case authActions.CREATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: 'create user error',
      };
    case authActions.SIGN_IN_USER:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case authActions.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentUser: action.payload,
      };
    case authActions.SIGN_IN_USER_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        pending: false,
        errors: 'sign in error',
      };
    case authActions.GET_CURRENT_USER:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case authActions.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentUser: action.payload,
      };
    case authActions.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: 'get current user error',
      };
    case authActions.EDIT_CURRENT_USER:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case authActions.EDIT_CURRENT_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentUser: action.payload,
      };
    case authActions.EDIT_CURRENT_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: 'edit current user error',
      };
    default:
      return state;
  }
}
