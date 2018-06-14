import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegisterData, SignInData } from 'angular2-token';

import * as authActions from './auth.actions';
import { State } from '../../../store/index';
import { IBillingProfile } from './auth.interfaces';

@Injectable()
export class AuthDispatchers {
  constructor(private store: Store<State>) {}

  public createUser(registerData: RegisterData) {
    this.store.dispatch(new authActions.CreateUserAction(registerData));
  }

  public signInUser(signInData: SignInData) {
    this.store.dispatch(new authActions.SignInUserAction(signInData));
  }

  public getCurrentUser() {
    this.store.dispatch(new authActions.GetCurrentUserAction());
  }

  public updateBillingProfile(params: IBillingProfile) {
    this.store.dispatch(new authActions.UpdateBillingProfileAction(params));
  }

  public setTimezone(timezone: string) {
    this.store.dispatch(new authActions.SetTimezoneAction(timezone));
  }
}
