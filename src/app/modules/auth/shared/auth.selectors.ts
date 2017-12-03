import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IUser } from './auth.interfaces';
import { State } from '../../../store/index';

@Injectable()
export class AuthSelectors {
  private currentUser$ = this.store.select(state => state.auth.currentUser);
  private pending$ = this.store.select(state => state.auth.pending);

  constructor(private store: Store<State>) {}

  getCurrentUser(): Observable<IUser> {
    return this.currentUser$;
  }

  isPending(): Observable<boolean> {
    return this.pending$;
  }
}
