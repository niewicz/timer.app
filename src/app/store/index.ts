import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromAuth from './../modules/auth/shared/auth.reducers';
import { MetaReducer } from '@ngrx/store/src/models';
import { environment } from '../../environments/environment';
import { combineReducers } from '@ngrx/store';

export interface State {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: any): State {
//     console.log('state', state);
//     console.log('action', action);

//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
