import { Action } from '@ngrx/store';

import { IProject } from './projects.interfaces';

export const GET_PROJECTS = '[Dahboard] Get Projects';
export const GET_PROJECTS_SUCCESS = '[Dahboard] Get Projects Success';
export const GET_PROJECTS_FAILURE = '[Dahboard] Get Projects Failure';

export const CREATE_PROJECT = '[Dashboard] Craete Client';
export const CREATE_PROJECT_SUCCESS = '[Dashboard] Craete Client Success';
export const CREATE_PROJECT_FAILURE = '[Dashboard] Craete Client Failure';

export class GetProjectsAction implements Action {
  readonly type = GET_PROJECTS;
}

export class GetProjectsSuccessAction implements Action {
  readonly type = GET_PROJECTS_SUCCESS;
  constructor(public payload: IProject[]) {}
}

export class GetProjectsFailureAction implements Action {
  readonly type = GET_PROJECTS_FAILURE;
  constructor(public payload: any) {}
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

export type Actions =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | GetProjectsFailureAction
  | CreateProjectAction
  | CreateProjectSuccessAction
  | CreateProjectFailureAction;
