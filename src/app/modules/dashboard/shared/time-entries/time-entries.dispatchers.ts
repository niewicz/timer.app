import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as timeEntriesActions from './time-entries.actions';
import { State } from '../../../../store/index';

import {
  ITimeEntriesParams,
  ITransferTimeEntry,
} from './time-entries.interfaces';

@Injectable()
export class TimeEntriesDispatchers {
  constructor(private store: Store<State>) {}

  public getTimeEntries(): void {
    this.store.dispatch(new timeEntriesActions.GetTimeEntriesAction());
  }

  public loadMoreTimeEntries(): void {
    this.store.dispatch(new timeEntriesActions.LoadMoreTimeEntriesAction());
  }

  public createTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(new timeEntriesActions.CreateTimeEntryAction(params));
  }

  public updateTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(new timeEntriesActions.UpdateTimeEntryAction(params));
  }

  public removeTimeEntry(id: number): void {
    this.store.dispatch(new timeEntriesActions.RemoveTimeEntryAction(id));
  }

  public getCurrentTimeEntry(): void {
    this.store.dispatch(new timeEntriesActions.GetCurrentTimeEntryAction());
  }

  public updateCurrentTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(
      new timeEntriesActions.UpdateCurrentTimeEntryAction(params),
    );
  }

  public stopCurrentTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(
      new timeEntriesActions.StopCurrentTimeEntryAction(params),
    );
  }

  public removeCurrentTimeEntry(): void {
    this.store.dispatch(new timeEntriesActions.RemoveCurrentTimeEntryAction());
  }
}
