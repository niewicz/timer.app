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
  ITimeEntriesResponse,
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
          (timeEntriesResponse: ITimeEntriesResponse) =>
            new timeEntriesActions.GetTimeEntriesSuccessAction(
              timeEntriesResponse,
            ),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.GetTimeEntriesFailureAction(error),
          ),
        ),
    );

  @Effect()
  loadMoreTimeEntries$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.LOAD_MORE_TIME_ENTRIES)
    .withLatestFrom(this.store, (action, state) => state.timeEntries.params)
    .switchMap((params: ITimeEntriesParams) =>
      this.timeEntriesService
        .getTimeEntries(params)
        .map(
          (timeEntriesResponse: ITimeEntriesResponse) =>
            new timeEntriesActions.LoadMoreTimeEntriesSuccessAction(
              timeEntriesResponse,
            ),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.LoadMoreTimeEntriesFailureAction(error),
          ),
        ),
    );

  @Effect()
  getCurrentTimeEntry$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.GET_CURRENT_TIME_ENTRY)
    .switchMap(() =>
      this.timeEntriesService
        .getCurrentTimeEntry()
        .map(
          (timeEntry: ITimeEntry) =>
            new timeEntriesActions.GetCurrentTimeEntrySuccessAction(timeEntry),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.GetCurrentTimeEntryFailureAction(error),
          ),
        ),
    );

  @Effect()
  createTimeEntry$: Observable<Action> = this.actions$
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

  @Effect()
  updateTimeEntry$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.UPDATE_TIME_ENTRY)
    .map(toPayload)
    .switchMap((payload: ITimeEntry) =>
      this.timeEntriesService
        .updateTimeEntry(payload)
        .map(
          (timeEntry: ITimeEntry) =>
            new timeEntriesActions.UpdateTimeEntrySuccessAction(timeEntry),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.UpdateTimeEntryFailureAction(error),
          ),
        ),
    );

  @Effect()
  stopCurrentTimeEntry$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.STOP_CURRENT_TIME_ENTRY)
    .map(toPayload)
    .switchMap((payload: ITransferTimeEntry) =>
      this.timeEntriesService
        .updateTimeEntry(payload)
        .map(
          (timeEntry: ITimeEntry) =>
            new timeEntriesActions.StopCurrentTimeEntrySuccessAction(timeEntry),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.StopCurrentTimeEntryFailureAction(error),
          ),
        ),
    );

  @Effect()
  updateCurrntTimeEntry$: Observable<Action> = this.actions$
    .ofType(timeEntriesActions.UPDATE_CURRENT_TIME_ENTRY)
    .map(toPayload)
    .switchMap((payload: ITimeEntry) =>
      this.timeEntriesService
        .updateTimeEntry(payload)
        .map(
          (timeEntry: ITimeEntry) =>
            new timeEntriesActions.UpdateCurrentTimeEntrySuccessAction(
              timeEntry,
            ),
        )
        .catch((error: any) =>
          Observable.of(
            new timeEntriesActions.UpdateCurrentTimeEntryFailureAction(error),
          ),
        ),
    );

  constructor(
    private actions$: Actions,
    private timeEntriesService: TimeEntriesService,
    private store: Store<State>,
  ) {}
}
