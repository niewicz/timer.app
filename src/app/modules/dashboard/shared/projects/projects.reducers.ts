import * as projectsActions from './projects.actions';
import { IProject, IProjectsParams } from './projects.interfaces';

export interface ProjectsState {
  projects: IProject[];
  editProject: IProject;
  currentProject: IProject;
  params: IProjectsParams;
  pending: boolean;
  errors: any;
  total: number;
}

const initialState: ProjectsState = {
  projects: [],
  editProject: undefined,
  currentProject: undefined,
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

    case projectsActions.GET_PROJECT:
      return {
        ...state,
        pending: true,
        errors: undefined,
        currentProject: undefined,
      };

    case projectsActions.GET_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        currentProject: action.payload,
      };

    case projectsActions.GET_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.EDIT_PROJECT:
      return {
        ...state,
        pending: true,
        errors: undefined,
        editProject: undefined,
      };

    case projectsActions.EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        editProject: action.payload,
      };

    case projectsActions.EDIT_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case projectsActions.UPDATE_PROJECT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case projectsActions.UPDATE_PROJECT_SUCCESS:
      const updatedProject = action.payload;
      const updatedList = state.projects.slice();
      const indexOfUpdated = updatedList.findIndex(
        p => p.id === updatedProject.id,
      );
      updatedList.splice(indexOfUpdated, 1, updatedProject);

      return {
        ...state,
        pending: false,
        errors: undefined,
        projects: updatedList,
        currentProject: action.payload,
      };

    case projectsActions.UPDATE_PROJECT_FAILURE:
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
