import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as authActions from './auth.actions';

import { AuthService } from './auth.service';

import { RegisterData, SignInData } from 'angular2-token';
import { IUser, IBillingProfile } from './auth.interfaces';
import { SnotifyService } from 'ng-snotify';

@Injectable()
export class AuthEffects {
  @Effect()
  createUser$: Observable<Action> = this.actions$
    .ofType(authActions.CREATE_USER)
    .map((action: authActions.CreateUserAction) => action.payload)
    .switchMap((payload: RegisterData) =>
      this.authService
        .signUp(payload)
        .mergeMap((user: IUser) => {
          return [
            new authActions.CreateUserSuccessAction(user),
            new authActions.SignInUserAction({
              email: payload.email,
              password: payload.password,
            }),
          ];
        })
        .catch((error: any) =>
          Observable.of(new authActions.CreateUserFailureAction(error)),
        ),
    );

  @Effect()
  signInUser$: Observable<Action> = this.actions$
    .ofType(authActions.SIGN_IN_USER)
    .map((action: authActions.SignInUserAction) => action.payload)
    .switchMap((payload: SignInData) =>
      this.authService
        .logIn(payload)
        .map((user: IUser) => new authActions.SignInUserSuccessAction(user))
        .catch((error: any) =>
          Observable.of(new authActions.SignInUserFailureAction(error)),
        ),
    );

  @Effect()
  getCurrentUser$: Observable<Action> = this.actions$
    .ofType(authActions.GET_CURRENT_USER)
    .switchMap(() =>
      this.authService
        .getCurrentUser()
        .map((user: IUser) => new authActions.GetCurrentUserSuccessAction(user))
        .catch((error: string) =>
          Observable.of(new authActions.GetCurrentUserFailureAction(error)),
        ),
    );

  @Effect()
  updateBillingProfile$: Observable<Action> = this.actions$
    .ofType(authActions.UPDATE_BILLING_PROFILE)
    .map((action: authActions.UpdateBillingProfileAction) => action.payload)
    .switchMap((payload: IBillingProfile) =>
      this.authService
        .updateBillingProfile(payload)
        .map((user: IUser) => {
          this.notifications.success('We have updated your billing profile.', {
            showProgressBar: false,
            position: 'centerBottom',
          });
          return new authActions.UpdateBillingProfileSuccessAction(user);
        })
        .catch((error: string) =>
          Observable.of(
            new authActions.UpdateBillingProfileFailureAction(error),
          ),
        ),
    );

  @Effect()
  setTimezone$: Observable<Action> = this.actions$
    .ofType(authActions.SET_TIMEZONE)
    .map((action: authActions.SetTimezoneAction) => action.payload)
    .switchMap((payload: string) =>
      this.authService
        .setTimezone(payload)
        .map((user: IUser) => {
          this.notifications.success('Timezone has been updated.', {
            showProgressBar: false,
            position: 'centerBottom',
          });
          return new authActions.SetTimezoneSuccessAction(user);
        })
        .catch((error: string) =>
          Observable.of(new authActions.SetTimezoneFailureAction(error)),
        ),
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private notifications: SnotifyService,
  ) {}
}
