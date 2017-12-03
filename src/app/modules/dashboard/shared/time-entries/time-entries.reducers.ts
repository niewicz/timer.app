import * as timeEntriesActions from './time-entries.actions';
import { ITimeEntry, ITimeEntriesParams } from './time-entries.interfaces';

export interface TimeEntriesState {
  timeEntries: ITimeEntry[];
  params: ITimeEntriesParams;
  pending: boolean;
  errors: any;
}

const initialState: TimeEntriesState = {
  timeEntries: undefined,
  params: {
    limit: 15,
    offset: 0,
    taskId: undefined,
    since: undefined,
    to: undefined,
  },
  pending: false,
  errors: undefined,
};

export function reducer(
  state = initialState,
  action: timeEntriesActions.Actions,
) {
  switch (action.type) {
    case timeEntriesActions.GET_TIME_ENTRIES:
      return {
        ...state,
        pending: true,
        errors: undefined,
        params: {
          ...state.params,
          limit: 15,
          offset: 0,
        },
      };
    case timeEntriesActions.GET_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        timeEntries: action.payload,
      };
    case timeEntriesActions.GET_TIME_ENTRIES_FAILURE:
      return {
        ...state,
        pending: false,
        errors: 'todo errors',
      };
    default:
      return state;
  }
}
