import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { SummariesService } from './summaries.service';
import { IChartData, IChartParams } from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';
import * as summariesActions from './summaries.actions';

@Injectable()
export class SummariesEffects {
  @Effect()
  getSummary$: Observable<Action> = this.actions$
    .ofType(summariesActions.GET_WORKLOAD)
    .map((action: summariesActions.GetWorkloadAction) => action.payload)
    .switchMap((params: IChartParams) =>
      this.summariesService
        .getSummary(params)
        .map(
          (data: IChartData[]) =>
            new summariesActions.GetWorkloadSuccessAction(data),
        )
        .catch((error: any) =>
          Observable.of(new summariesActions.GetWorkloadFailureAction(error)),
        ),
    );

  @Effect()
  getLastProjects$: Observable<Action> = this.actions$
    .ofType(summariesActions.GET_LAST_PROJECTS)
    .switchMap(() =>
      this.summariesService
        .getLastProjects()
        .map(
          (data: IProject[]) =>
            new summariesActions.GetLastProjectsSuccessAction(data),
        )
        .catch((error: any) =>
          Observable.of(
            new summariesActions.GetLastProjectsFailureAction(error),
          ),
        ),
    );

  constructor(
    private actions$: Actions,
    private summariesService: SummariesService,
    private store: Store<State>,
  ) {}
}
