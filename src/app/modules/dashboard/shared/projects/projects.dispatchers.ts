import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as projectsActions from './projects.actions';
import { State } from '../../../../store/index';
import { IProject, IProjectsParams } from './projects.interfaces';

@Injectable()
export class ProjectsDispatchers {
  constructor(private store: Store<State>) {}

  public getProjects(): void {
    this.store.dispatch(new projectsActions.GetProjectsAction());
  }

  public loadMoreProjects(): void {
    this.store.dispatch(new projectsActions.LoadMoreProjectsAction());
  }

  public searchProjects(params: IProjectsParams): void {
    this.store.dispatch(new projectsActions.SearchProjectsAction(params));
  }

  public createProject(project: IProject): void {
    this.store.dispatch(new projectsActions.CreateProjectAction(project));
  }

  public removeProject(id: number): void {
    this.store.dispatch(new projectsActions.RemoveProjectAction(id));
  }
}
