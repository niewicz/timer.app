import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as timeEntriesActions from './time-entries.actions';
import { State } from '../../../../store/index';
import { ITimeEntriesParams } from './time-entries.interfaces';

@Injectable()
export class TimeEntriesDispatchers {
  constructor(private store: Store<State>) {}

  public getTimeEntries(): void {
    this.store.dispatch(new timeEntriesActions.GetTimeEntriesAction());
  }
}
