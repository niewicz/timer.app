import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
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
    .map(toPayload)
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
  removeProject$: Observable<Action> = this.actions$
    .ofType(projectsActions.REMOVE_PROJECT)
    .map(toPayload)
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
