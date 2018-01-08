import { Action } from '@ngrx/store';

import {
  IProject,
  IProjectsParams,
  IProjectsResponse,
} from './projects.interfaces';

export const GET_PROJECTS = '[Dahboard] Get Projects';
export const GET_PROJECTS_SUCCESS = '[Dahboard] Get Projects Success';
export const GET_PROJECTS_FAILURE = '[Dahboard] Get Projects Failure';

export const LOAD_MORE_PROJECTS = '[Dahboard] Load More Projects';
export const LOAD_MORE_PROJECTS_SUCCESS =
  '[Dahboard] Load More Projects Success';
export const LOAD_MORE_PROJECTS_FAILURE =
  '[Dahboard] Load More Projects Failure';

export const SEARCH_PROJECTS = '[Dashboard] Search Projects';

export const CREATE_PROJECT = '[Dashboard] Create Project';
export const CREATE_PROJECT_SUCCESS = '[Dashboard] Craete Project Success';
export const CREATE_PROJECT_FAILURE = '[Dashboard] Craete Project Failure';

export const EDIT_PROJECT = '[Dashboard] Edit Project';
export const EDIT_PROJECT_SUCCESS = '[Dashboard] Edit Project Success';
export const EDIT_PROJECT_FAILURE = '[Dashboard] Edit Project Failure';

export const UPDATE_PROJECT = '[Dashboard] Update Project';
export const UPDATE_PROJECT_SUCCESS = '[Dashboard] Update Project Success';
export const UPDATE_PROJECT_FAILURE = '[Dashboard] Update Project Failure';

export const REMOVE_PROJECT = '[Dashboard] Remove Project';
export const REMOVE_PROJECT_SUCCESS = '[Dashboard] Remove Project Success';
export const REMOVE_PROJECT_FAILURE = '[Dashboard] Remove Project Failure';

export class GetProjectsAction implements Action {
  readonly type = GET_PROJECTS;
}

export class GetProjectsSuccessAction implements Action {
  readonly type = GET_PROJECTS_SUCCESS;
  constructor(public payload: IProjectsResponse) {}
}

export class GetProjectsFailureAction implements Action {
  readonly type = GET_PROJECTS_FAILURE;
  constructor(public payload: any) {}
}

export class LoadMoreProjectsAction implements Action {
  readonly type = LOAD_MORE_PROJECTS;
}

export class LoadMoreProjectsSuccessAction implements Action {
  readonly type = LOAD_MORE_PROJECTS_SUCCESS;
  constructor(public payload: IProjectsResponse) {}
}

export class LoadMoreProjectsFailureAction implements Action {
  readonly type = LOAD_MORE_PROJECTS_FAILURE;
  constructor(public payload: any) {}
}

export class SearchProjectsAction implements Action {
  readonly type = SEARCH_PROJECTS;
  constructor(public payload: IProjectsParams) {}
}

export class CreateProjectAction implements Action {
  readonly type = CREATE_PROJECT;
  constructor(public payload: IProject) {}
}

export class CreateProjectSuccessAction implements Action {
  readonly type = CREATE_PROJECT_SUCCESS;
  constructor(public payload: IProject) {}
}

export class CreateProjectFailureAction implements Action {
  readonly type = CREATE_PROJECT_FAILURE;
  constructor(public payload: any) {}
}

export class EditProjectAction implements Action {
  readonly type = EDIT_PROJECT;
  constructor(public payload: number) {}
}

export class EditProjectSuccessAction implements Action {
  readonly type = EDIT_PROJECT_SUCCESS;
  constructor(public payload: IProject) {}
}

export class EditProjectFailureAction implements Action {
  readonly type = EDIT_PROJECT_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateProjectAction implements Action {
  readonly type = UPDATE_PROJECT;
  constructor(public payload: IProject) {}
}

export class UpdateProjectSuccessAction implements Action {
  readonly type = UPDATE_PROJECT_SUCCESS;
  constructor(public payload: IProject) {}
}

export class UpdateProjectFailureAction implements Action {
  readonly type = UPDATE_PROJECT_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveProjectAction implements Action {
  readonly type = REMOVE_PROJECT;
  constructor(public payload: number) {}
}

export class RemoveProjectSuccessAction implements Action {
  readonly type = REMOVE_PROJECT_SUCCESS;
  constructor(public payload: number) {}
}

export class RemoveProjectFailureAction implements Action {
  readonly type = REMOVE_PROJECT_FAILURE;
  constructor(public payload: any) {}
}

export type Actions =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | GetProjectsFailureAction
  | LoadMoreProjectsAction
  | LoadMoreProjectsSuccessAction
  | LoadMoreProjectsFailureAction
  | SearchProjectsAction
  | CreateProjectAction
  | CreateProjectSuccessAction
  | CreateProjectFailureAction
  | EditProjectAction
  | EditProjectSuccessAction
  | EditProjectFailureAction
  | UpdateProjectAction
  | UpdateProjectSuccessAction
  | UpdateProjectFailureAction
  | RemoveProjectAction
  | RemoveProjectSuccessAction
  | RemoveProjectFailureAction;
