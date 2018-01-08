import * as projectsActions from './projects.actions';
import { IProject, IProjectsParams } from './projects.interfaces';

export interface ProjectsState {
  projects: IProject[];
  params: IProjectsParams;
  pending: boolean;
  errors: any;
  total: number;
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
  total: undefined,
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
        projects: action.payload.projects,
        total: action.payload.total,
      };

    case projectsActions.GET_PROJECTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.LOAD_MORE_PROJECTS:
      return {
        ...state,
        pending: true,
        errors: undefined,
        params: {
          ...state.params,
          limit: 15,
          offset: state.projects.length,
        },
      };

    case projectsActions.LOAD_MORE_PROJECTS_SUCCESS:
      const afterLoadMore = state.projects.concat(action.payload.projects);

      return {
        ...state,
        pending: false,
        errors: undefined,
        projects: afterLoadMore,
        total: action.payload.total,
      };

    case projectsActions.LOAD_MORE_PROJECTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.SEARCH_PROJECTS:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.payload.q,
        },
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
        total: state.total + 1,
      };

    case projectsActions.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.REMOVE_PROJECT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case projectsActions.REMOVE_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        projects: state.projects.filter(p => p.id !== action.payload),
        total: state.total - 1,
      };

    case projectsActions.REMOVE_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
