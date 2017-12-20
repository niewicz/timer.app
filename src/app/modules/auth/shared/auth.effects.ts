import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as authActions from './auth.actions';

import { AuthService } from './auth.service';

import { RegisterData, SignInData } from 'angular2-token';
import { IUser } from './auth.interfaces';

@Injectable()
export class AuthEffects {
  @Effect()
  createUser$: Observable<Action> = this.actions$
    .ofType(authActions.CREATE_USER)
    .map(toPayload)
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
    .map(toPayload)
    .switchMap((payload: SignInData) =>
      this.authService
        .logIn(payload)
        .map((user: IUser) => new authActions.SignInUserSuccessAction(user))
        .catch((error: any) =>
          Observable.of(new authActions.SignInUserFailureAction(error)),
        ),
    );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
