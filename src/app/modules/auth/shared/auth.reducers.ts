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
    case authActions.SIGN_IN_USER:
    case authActions.GET_CURRENT_USER:
    case authActions.UPDATE_BILLING_PROFILE:
    case authActions.SET_TIMEZONE:
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
    case authActions.SIGN_IN_USER_FAILURE:
    case authActions.GET_CURRENT_USER_FAILURE:
    case authActions.UPDATE_BILLING_PROFILE_FAILURE:
    case authActions.SET_TIMEZONE_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case authActions.SIGN_IN_USER_SUCCESS:
    case authActions.GET_CURRENT_USER_SUCCESS:
    case authActions.UPDATE_BILLING_PROFILE_SUCCESS:
    case authActions.SET_TIMEZONE_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
