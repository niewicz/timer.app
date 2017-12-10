import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';
import { ITimeEntry, ITimeEntriesParams } from './time-entries.interfaces';

@Injectable()
export class TimeEntriesSelectors {
  private timeEntries$ = this.store.select(
    state => state.timeEntries.timeEntries,
  );
  private currentTimeEntry$ = this.store.select(
    state => state.timeEntries.currentTimeEntry,
  );
  private pending$ = this.store.select(state => state.timeEntries.pending);
  private params$ = this.store.select(state => state.timeEntries.params);

  constructor(private store: Store<State>) {}

  public getTimeEntries(): Observable<ITimeEntry[]> {
    return this.timeEntries$;
  }

  public isPending(): Observable<boolean> {
    return this.pending$;
  }

  public getParams(): Observable<ITimeEntriesParams> {
    return this.params$;
  }

  public getCurrentTimeEntry(): Observable<ITimeEntry> {
    return this.currentTimeEntry$;
  }
}
