import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { ProjectsService } from './projects.service';
import {
  IProject,
  IProjectsParams,
  IProjectsResponse,
} from './projects.interfaces';
import * as projectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  @Effect()
  getProjects$: Observable<Action> = this.actions$
    .ofType(projectsActions.GET_PROJECTS)
    .withLatestFrom(this.store, (action, state) => state.projects.params)
    .switchMap((params: IProjectsParams) => {
      return this.projectsService
        .getProjects(params)
        .map(
          (response: IProjectsResponse) =>
            new projectsActions.GetProjectsSuccessAction(response),
        )
        .catch((error: any) =>
          Observable.of(new projectsActions.GetProjectsFailureAction(error)),
        );
    });

  @Effect()
  loadMoreProjects$: Observable<Action> = this.actions$
    .ofType(projectsActions.LOAD_MORE_PROJECTS)
    .withLatestFrom(this.store, (action, state) => state.projects.params)
    .switchMap((params: IProjectsParams) => {
      return this.projectsService
        .getProjects(params)
        .map(
          (response: IProjectsResponse) =>
            new projectsActions.LoadMoreProjectsSuccessAction(response),
        )
        .catch((error: any) =>
          Observable.of(
            new projectsActions.LoadMoreProjectsFailureAction(error),
          ),
        );
    });

  @Effect()
  searchProjects$: Observable<Action> = this.actions$
    .ofType(projectsActions.SEARCH_PROJECTS)
    .map(() => new projectsActions.GetProjectsAction());

  @Effect()
  createProject$: Observable<Action> = this.actions$
    .ofType(projectsActions.CREATE_PROJECT)
    .map((action: projectsActions.CreateProjectAction) => action.payload)
    .switchMap((payload: IProject) =>
      this.projectsService
        .createProject(payload)
        .map(
          (project: IProject) =>
            new projectsActions.CreateProjectSuccessAction(project),
        )
        .catch((error: any) =>
          Observable.of(new projectsActions.CreateProjectFailureAction(error)),
        ),
    );

  @Effect()
  editProject$: Observable<Action> = this.actions$
    .ofType(projectsActions.EDIT_PROJECT)
    .map((action: projectsActions.EditProjectAction) => action.payload)
    .switchMap((payload: number) =>
      this.projectsService
        .editProject(payload)
        .map(
          (project: IProject) =>
            new projectsActions.EditProjectSuccessAction(project),
        )
        .catch((error: any) =>
          Observable.of(new projectsActions.EditProjectFailureAction(error)),
        ),
    );

  @Effect()
  updateProject$: Observable<Action> = this.actions$
    .ofType(projectsActions.UPDATE_PROJECT)
    .map((action: projectsActions.UpdateProjectAction) => action.payload)
    .switchMap((payload: IProject) =>
      this.projectsService
        .updateProject(payload)
        .map(
          (project: IProject) =>
            new projectsActions.UpdateProjectSuccessAction(project),
        )
        .catch((error: any) =>
          Observable.of(new projectsActions.UpdateProjectFailureAction(error)),
        ),
    );

  @Effect()
  removeProject$: Observable<Action> = this.actions$
    .ofType(projectsActions.REMOVE_PROJECT)
    .map((action: projectsActions.RemoveProjectAction) => action.payload)
    .switchMap((payload: number) =>
      this.projectsService
        .removeProject(payload)
        .map(() => new projectsActions.RemoveProjectSuccessAction(payload))
        .catch((error: any) =>
          Observable.of(new projectsActions.RemoveProjectFailureAction(error)),
        ),
    );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<State>,
  ) {}
}
