import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import * as fromAuth from './../modules/auth/shared/auth.reducers';
import * as fromTimeEntries from './../modules/dashboard/shared/time-entries/time-entries.reducers';
import * as fromClients from './../modules/dashboard/shared/clients/clients.reducers';
import * as fromProjects from './../modules/dashboard/shared/projects/projects.reducers';
import * as fromTasks from './../modules/dashboard/shared/tasks/tasks.reducers';

export interface State {
  auth: fromAuth.AuthState;
  timeEntries: fromTimeEntries.TimeEntriesState;
  clients: fromClients.ClientsState;
  projects: fromProjects.ProjectsState;
  tasks: fromTasks.TasksState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  timeEntries: fromTimeEntries.reducer,
  clients: fromClients.reducer,
  projects: fromProjects.reducer,
  tasks: fromTasks.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
