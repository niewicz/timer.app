import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';
import { ITask, ITasksParams } from './tasks.interfaces';

@Injectable()
export class TasksSelectors {
  private tasks$ = this.store.select(state => state.tasks.tasks);
  private pending$ = this.store.select(state => state.tasks.pending);
  private params$ = this.store.select(state => state.tasks.params);

  constructor(private store: Store<State>) {}

  public getTasks(): Observable<ITask[]> {
    return this.tasks$;
  }

  public isPending(): Observable<boolean> {
    return this.pending$;
  }

  public getParams(): Observable<ITasksParams> {
    return this.params$;
  }
}
