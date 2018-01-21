import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';

import { State } from '../../../../store/index';
import { SummariesService } from './summaries.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as summariesActions from './summaries.actions';
import { IChartData } from './summaries.interfaces';

@Injectable()
export class SummariesEffects {
  @Effect()
  getSummary$: Observable<Action> = this.actions$
    .ofType(summariesActions.GET_WORKLOAD)
    .map(toPayload)
    .switchMap((params: any) =>
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

  constructor(
    private actions$: Actions,
    private summariesService: SummariesService,
    private store: Store<State>,
  ) {}
}
