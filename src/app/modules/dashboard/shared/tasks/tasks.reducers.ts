import * as tasksActions from './tasks.actions';
import { ITask, ITasksParams } from './tasks.interfaces';

export interface TasksState {
  tasks: ITask[];
  params: ITasksParams;
  pending: boolean;
  errors: any;
}

const initialState: TasksState = {
  tasks: undefined,
  params: {
    limit: 15,
    offset: 0,
    projectId: undefined,
    q: undefined,
  },
  pending: false,
  errors: undefined,
};

export function reducer(state = initialState, action: tasksActions.Actions) {
  switch (action.type) {
    case tasksActions.GET_TASKS:
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
    case tasksActions.GET_TASKS_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        tasks: action.payload,
      };
    case tasksActions.GET_TASKS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    case tasksActions.SEARCH_TASKS:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.payload.q,
        },
      };
    default:
      return state;
  }
}
