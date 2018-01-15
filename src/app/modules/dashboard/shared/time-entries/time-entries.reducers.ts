import * as timeEntriesActions from './time-entries.actions';
import * as tasksActions from '../tasks/tasks.actions';
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
  action: timeEntriesActions.Actions | tasksActions.Actions,
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
    case timeEntriesActions.UPDATE_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case timeEntriesActions.UPDATE_TIME_ENTRY_SUCCESS:
      const updatedTimeEntry = action.payload;
      const updatedTimeEntriesList = state.timeEntries.slice();
      const indexOfTimeEntry = updatedTimeEntriesList.findIndex(
        te => te.id === updatedTimeEntry.id,
      );
      updatedTimeEntriesList.splice(indexOfTimeEntry, 1, updatedTimeEntry);

      return {
        ...state,
        pending: false,
        errors: undefined,
        timeEntries: updatedTimeEntriesList,
      };

    case timeEntriesActions.UPDATE_TIME_ENTRY_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case timeEntriesActions.REMOVE_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case timeEntriesActions.REMOVE_TIME_ENTRY_SUCCESS:
      const afterTimeEntryRemoval = state.timeEntries.filter(
        te => te.id !== action.payload,
      );

      return {
        ...state,
        pending: false,
        errors: undefined,
        timeEntries: afterTimeEntryRemoval,
        total: state.total - 1,
      };

    case timeEntriesActions.REMOVE_TIME_ENTRY_FAILURE:
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

    case timeEntriesActions.GET_CURRENT_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case timeEntriesActions.GET_CURRENT_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentTimeEntry: action.payload,
      };

    case timeEntriesActions.GET_CURRENT_TIME_ENTRY_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case timeEntriesActions.UPDATE_CURRENT_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case timeEntriesActions.UPDATE_CURRENT_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentTimeEntry: action.payload,
      };

    case timeEntriesActions.UPDATE_CURRENT_TIME_ENTRY_FAILURE:
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

    case timeEntriesActions.REMOVE_CURRENT_TIME_ENTRY:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case timeEntriesActions.REMOVE_CURRENT_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentTimeEntry: undefined,
      };

    case timeEntriesActions.REMOVE_CURRENT_TIME_ENTRY_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case tasksActions.UPDATE_TASK_SUCCESS:
      return stateAfterTaskUpdate(state, action.payload);

    default:
      return state;
  }
}

function stateAfterTaskUpdate(state, updatedTask): TimeEntriesState {
  const newTimeEntries = state.timeEntries.slice();

  let indexOfTimeEntry;
  let updatedTimeEntry;

  state.timeEntries.forEach(timeEntry => {
    if (timeEntry.taskId === updatedTask.id) {
      indexOfTimeEntry = newTimeEntries.findIndex(te => te.id === timeEntry.id);
      updatedTimeEntry = Object.assign({}, timeEntry, {
        task: updatedTask,
        taskId: updatedTask.id,
        project: updatedTask.project,
        projectId: updatedTask.projectId,
      });
      newTimeEntries.splice(indexOfTimeEntry, 1, updatedTimeEntry);
    }
  });

  let newCurrentTimeEntry;

  if (state.currentTimeEntry && state.currentTimeEntry.taskId === updatedTask.id) {
    newCurrentTimeEntry = Object.assign({}, state.currentTimeEntry);
    newCurrentTimeEntry.task = updatedTask;
  }

  return {
    ...state,
    currentTimeEntry: newCurrentTimeEntry,
    timeEntries: newTimeEntries,
  };
}
