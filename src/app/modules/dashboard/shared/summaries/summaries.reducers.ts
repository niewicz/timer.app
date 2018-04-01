import { IChartData } from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';
import * as summariesActions from './summaries.actions';

export interface SummariesState {
  workload: IChartData[];
  projects: IProject[];
  pending: boolean;
}

const initialState: SummariesState = {
  workload: [],
  projects: [],
  pending: false,
};

export function reducer(
  state = initialState,
  action: summariesActions.Actions,
) {
  switch (action.type) {
    case summariesActions.GET_WORKLOAD_SUCCESS:
      return {
        ...state,
        workload: action.payload,
      };

    case summariesActions.GET_LAST_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
}
