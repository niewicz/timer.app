import { IChartData } from './summaries.interfaces';
import * as summariesActions from './summaries.actions';

export interface SummariesState {
  workload: IChartData[];
  pending: boolean;
}

const initialState: SummariesState = {
  workload: [],
  pending: false,
};

export function reducer(
  state = initialState,
  action: summariesActions.Actions,
) {
  switch (action.type) {
    case summariesActions.GET_WORKLOAD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        workload: action.payload,
      };

    default:
      return state;
  }
}
