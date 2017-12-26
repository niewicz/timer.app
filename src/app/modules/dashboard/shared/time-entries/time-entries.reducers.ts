import * as timeEntriesActions from './time-entries.actions';
import { ITimeEntry, ITimeEntriesParams } from './time-entries.interfaces';

export interface TimeEntriesState {
  currentTimeEntry: ITimeEntry;
  timeEntries: ITimeEntry[];
  params: ITimeEntriesParams;
  pending: boolean;
  total: number;
  errors: any;
}

const initialState: TimeEntriesState = {
  currentTimeEntry: undefined,
  timeEntries: undefined,
  params: {
    limit: 15,
    offset: 0,
    taskId: undefined,
    since: undefined,
    to: undefined,
  },
  pending: false,
  total: 0,
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
        timeEntries: action.payload.timeEntries,
        total: action.payload.total,
      };
    case timeEntriesActions.GET_TIME_ENTRIES_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    case timeEntriesActions.LOAD_MORE_TIME_ENTRIES:
      console.log(state.timeEntries.length);
      return {
        ...state,
        pending: true,
        errors: undefined,
        params: {
          ...state.params,
          limit: 15,
          offset: state.timeEntries.length,
        },
      };
    case timeEntriesActions.LOAD_MORE_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        timeEntries: state.timeEntries.concat(action.payload.timeEntries),
        total: action.payload.total,
      };
    case timeEntriesActions.LOAD_MORE_TIME_ENTRIES_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    case timeEntriesActions.CREATE_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case timeEntriesActions.CREATE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        currentTimeEntry: action.payload,
        errors: undefined,
      };
    case timeEntriesActions.CREATE_TIME_ENTRY_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    case timeEntriesActions.STOP_CURRENT_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case timeEntriesActions.STOP_CURRENT_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        currentTimeEntry: undefined,
        timeEntries: [action.payload].concat(state.timeEntries),
        errors: undefined,
      };
    case timeEntriesActions.STOP_CURRENT_TIME_ENTRY_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}
