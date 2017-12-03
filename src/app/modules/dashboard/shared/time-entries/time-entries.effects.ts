import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { TimeEntriesService } from './time-entries.service';
import { ITimeEntry, ITimeEntriesParams } from './time-entries.interfaces';
import * as timeEntriesActions from './time-entries.actions';

@Injectable()
export class TimeEntriesEffects {
  @Effect()
  getTimeEntries$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.GET_TIME_ENTRIES)
    .withLatestFrom(this.store, (action, state) => state.timeEntries.params)
    .switchMap((params: ITimeEntriesParams) => {
      return this.timeEntriesService
        .getTimeEntries(params)
        .map(
          (timeEntries: ITimeEntry[]) =>
            new timeEntriesActions.GetTimeEntriesSuccessAction(timeEntries),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.GetTimeEntriesFailureAction(error),
          ),
        );
    });

  constructor(
    private actions$: Actions,
    private timeEntriesService: TimeEntriesService,
    private store: Store<State>,
  ) {}
}
