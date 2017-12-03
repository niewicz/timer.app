import { Action } from '@ngrx/store';

import { IProject } from './projects.interfaces';

export const GET_PROJECTS = '[Dahboard] Get Projects';
export const GET_PROJECTS_SUCCESS = '[Dahboard] Get Projects Success';
export const GET_PROJECTS_FAILURE = '[Dahboard] Get Projects Failure';

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

export type Actions =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | GetProjectsFailureAction;
