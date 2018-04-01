import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';

import * as summariesActions from './summaries.actions';

@Injectable()
export class SummariesDispatchers {
  constructor(private store: Store<State>) {}

  public getSummary(params: any): void {
    this.store.dispatch(new summariesActions.GetWorkloadAction(params));
  }

  public getLastProjects(): void {
    this.store.dispatch(new summariesActions.GetLastProjectsAction());
  }
}
