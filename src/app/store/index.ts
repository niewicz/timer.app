import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import * as fromAuth from './../modules/auth/shared/auth.reducers';
import * as fromTimeEntries from './../modules/dashboard/shared/time-entries/time-entries.reducers';

export interface State {
  auth: fromAuth.AuthState;
  timeEntries: fromTimeEntries.TimeEntriesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  timeEntries: fromTimeEntries.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
