import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { TimeEntriesService } from './time-entries.service';
import {
  ITimeEntry,
  ITimeEntriesParams,
  ITransferTimeEntry,
} from './time-entries.interfaces';
import * as timeEntriesActions from './time-entries.actions';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class TimeEntriesEffects {
  @Effect()
  getTimeEntries$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.GET_TIME_ENTRIES)
    .withLatestFrom(this.store, (action, state) => state.timeEntries.params)
    .switchMap((params: ITimeEntriesParams) =>
      this.timeEntriesService
        .getTimeEntries(params)
        .map(
          (timeEntries: ITimeEntry[]) =>
            new timeEntriesActions.GetTimeEntriesSuccessAction(timeEntries),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.GetTimeEntriesFailureAction(error),
          ),
        ),
    );

  @Effect()
  createTimeEntry: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.CREATE_TIME_ENTRY)
    .map(toPayload)
    .switchMap((payload: ITransferTimeEntry) =>
      this.timeEntriesService
        .createTimeEntry(payload)
        .map(
          (timeEntry: ITimeEntry) =>
            new timeEntriesActions.CreateTimeEntrySuccessAction(timeEntry),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.CreateTimeEntryFailureAction(error),
          ),
        ),
    );

  constructor(
    private actions$: Actions,
    private timeEntriesService: TimeEntriesService,
    private store: Store<State>,
  ) {}
}
