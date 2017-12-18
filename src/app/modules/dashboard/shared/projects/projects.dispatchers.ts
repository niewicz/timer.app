import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as projectsActions from './projects.actions';
import { State } from '../../../../store/index';
import { IProject } from './projects.interfaces';

@Injectable()
export class ProjectsDispatchers {
  constructor(private store: Store<State>) {}

  public getProjects(): void {
    this.store.dispatch(new projectsActions.GetProjectsAction());
  }

  public createProject(project: IProject): void {
    this.store.dispatch(new projectsActions.CreateProjectAction(project));
  }
}
