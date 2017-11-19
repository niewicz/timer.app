import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { RegisterData, SignInData } from 'angular2-token';

import * as authActions from './auth.actions';

@Injectable()
export class AuthDispatchers {
  constructor(private store: Store<State>) {}

  public createUser(registerData: RegisterData) {
    this.store.dispatch(new authActions.CreateUserAction(registerData));
  }

  public signInUser(signInData: SignInData) {
    this.store.dispatch(new authActions.SignInUserAction(sign));
  }
}
