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

  public createTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(new timeEntriesActions.CreateTimeEntryAction(params));
  }

  public updateTimeEntry(params: ITransferTimeEntry): void {
    console.log('finish me');
  }

  public updateCurrentTimeEntry(params: ITransferTimeEntry): void {
    console.log('finish me');
  }

  public stopCurrentTimeEntry(params: ITransferTimeEntry): void {
    this.store.dispatch(
      new timeEntriesActions.StopCurrentTimeEntryAction(params),
    );
  }
}
