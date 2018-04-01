import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { IChartData } from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';

@Injectable()
export class SummariesSelectors {
  private workload$ = this.store.select(state => state.summaries.workload);
  private projects$ = this.store.select(state => state.summaries.projects);

  constructor(private store: Store<State>) {}

  public getWorkload(): Observable<IChartData[]> {
    return this.workload$;
  }

  public getLastProjects(): Observable<IProject[]> {
    return this.projects$;
  }
}
