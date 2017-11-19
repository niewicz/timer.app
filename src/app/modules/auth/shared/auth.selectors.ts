import { Injectable } from '@angular/core';

import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IUser } from './auth.interfaces';

@Injectable()
export class AuthSelectors {
  currentUser$ = this.store.select(state => state.auth.currentUser);
  pending$ = this.store.select(state => state.auth.pending);

  constructor(private store: Store<State>) {}

  getCurrentUser(): Observable<IUser> {
    return this.currentUser$;
  }

  isPending(): Observable<boolean> {
    return this.pending$;
  }
}
