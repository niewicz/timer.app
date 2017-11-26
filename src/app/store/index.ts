import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './../modules/auth/shared/auth.reducers';

export interface State {
  auth: fromAuth.AuthState;
}

export const reducres: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
