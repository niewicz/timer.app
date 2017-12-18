import * as projectsActions from './projects.actions';
import { IProject, IProjectsParams } from './projects.interfaces';

export interface ProjectsState {
  projects: IProject[];
  params: IProjectsParams;
  pending: boolean;
  errors: any;
}

const initialState: ProjectsState = {
  projects: undefined,
  params: {
    limit: 15,
    offset: 0,
    clientId: undefined,
    q: undefined,
  },
  pending: false,
  errors: undefined,
};

export function reducer(state = initialState, action: projectsActions.Actions) {
  switch (action.type) {
    case projectsActions.GET_PROJECTS:
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

    case projectsActions.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        projects: action.payload,
      };

    case projectsActions.GET_PROJECTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.CREATE_PROJECT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case projectsActions.CREATE_PROJECT_SUCCESS:
      const newList = [...state.projects, action.payload];

      return {
        ...state,
        pending: false,
        errors: undefined,
        projects: newList,
      };

    case projectsActions.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
