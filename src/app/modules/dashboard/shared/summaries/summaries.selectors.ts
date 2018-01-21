import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';
import { Observable } from 'rxjs/Observable';
import { IChartData } from './summaries.interfaces';

@Injectable()
export class SummariesSelectors {
  private workload$ = this.store.select(state => state.summaries.workload);

  constructor(private store: Store<State>) {}

  public getWorkload(): Observable<IChartData[]> {
    return this.workload$;
  }
}
