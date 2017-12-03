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

  constructor(private store: Store<State>) {}

  public getProjects(): Observable<IProject[]> {
    return this.projects$;
  }

  public isPending(): Observable<boolean> {
    return this.pending$;
  }

  public getParams(): Observable<IProjectsParams> {
    return this.params$;
  }
}
