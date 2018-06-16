import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';
import { IProject, IProjectsParams } from './projects.interfaces';

@Injectable()
export class ProjectsSelectors {
  private projects$ = this.store.select(state => state.projects.projects);
  private pending$ = this.store.select(state => state.projects.pending);
  private params$ = this.store.select(state => state.projects.params);
  private total$ = this.store.select(state => state.projects.total);
  private editProject$ = this.store.select(state => state.projects.editProject);
  private project$ = this.store.select(state => state.projects.currentProject);

  constructor(private store: Store<State>) {}

  public getProjects(): Observable<IProject[]> {
    return this.projects$;
  }

  public getEditProject(): Observable<IProject> {
    return this.editProject$;
  }

  public getProject(): Observable<IProject> {
    return this.project$;
  }

  public isPending(): Observable<boolean> {
    return this.pending$;
  }

  public getParams(): Observable<IProjectsParams> {
    return this.params$;
  }

  public getTotal(): Observable<number> {
    return this.total$;
  }
}
