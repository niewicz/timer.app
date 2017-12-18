import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { ProjectsService } from './projects.service';
import { IProject, IProjectsParams } from './projects.interfaces';
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
          (projects: IProject[]) =>
            new projectsActions.GetProjectsSuccessAction(projects),
        )
        .catch((error: any) =>
          Observable.of(new projectsActions.GetProjectsFailureAction(error)),
        );
    });

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

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<State>,
  ) {}
}
