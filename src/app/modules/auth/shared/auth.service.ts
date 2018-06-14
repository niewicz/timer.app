import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Angular2TokenService, SignInData, RegisterData } from 'angular2-token';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { UtilsService } from './../../../core/services/utils.service';
import { AuthDispatchers } from './auth.dispatchers';
import { IUser, IBillingProfile } from './auth.interfaces';
import { ApiRoutes } from '../../../core/services/api-routes.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DOCUMENT) private document,
    private tokenService: Angular2TokenService,
    private http: HttpClient,
    private utils: UtilsService,
    private routes: ApiRoutes,
  ) {}

  logIn(logInData: SignInData): Observable<IUser> {
    return this.tokenService
      .signIn(logInData)
      .map(response => {
        this._reverseParseAuthToken();
        return response.json();
      })
      .map(response => response.data)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  signUp(registerData: RegisterData): Observable<IUser> {
    const data = {
      email: registerData.email,
      password: registerData.password,
      passwordConfirmation: registerData.passwordConfirmation,
    };

    return this.tokenService
      .registerAccount(data)
      .map(response => response.json())
      .map(response => response.data)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  signOut() {
    return this.tokenService
      .signOut()
      .map(response => {
        this._cleanStorage();
        this.document.location.href = '/users/sign_in';
        return response;
      })
      .catch(error => Observable.throw(error));
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  getCurrentUser(): Observable<IUser> {
    return this.http
      .get(this.routes.getCurrentUserPath())
      .map(response => this.utils.camelize(response))
      .map(response => response.data)
      .catch(error => Observable.throw(error));
  }

  updateBillingProfile(params: IBillingProfile): Observable<IUser> {
    return this.http
      .put(this.routes.updateBillingProfilePath(), {
        billing_profile: this.utils.decamelize(params),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.data)
      .catch(error => Observable.throw(error));
  }

  setTimezone(timezone: string): Observable<IUser> {
    return this.http
      .put(this.routes.setTimezonePath(), {
        timezone,
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.data)
      .catch(error => Observable.throw(error));
  }
  private _saveValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  private _retrieveValue(key: string) {
    return localStorage.getItem(key);
  }

  private _cleanStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('client');
    localStorage.removeItem('expiry');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('uid');
    localStorage.removeItem('auth_headers');
  }

  private _parseAuthToken() {
    const authHeaders = JSON.parse(this._retrieveValue('auth_headers'));
    if (authHeaders) {
      const accessToken = authHeaders['access-token'];
      this._saveValue('accessToken', accessToken);
      const tokenType = authHeaders['token-type'];
      this._saveValue('tokenType', tokenType);
      const client = authHeaders['client'];
      this._saveValue('client', client);
      const expiry = authHeaders['expiry'];
      this._saveValue('expiry', expiry);
      const uid = authHeaders['uid'];
      this._saveValue('uid', uid);
    } else {
      this._cleanStorage();
    }
  }

  private _reverseParseAuthToken() {
    const authHeaders = {
      'access-token': localStorage.getItem('accessToken'),
      'token-type': localStorage.getItem('tokenType'),
      client: localStorage.getItem('client'),
      expiry: localStorage.getItem('expiry'),
      uid: localStorage.getItem('uid'),
    };
    localStorage.setItem('auth_headers', JSON.stringify(authHeaders));
  }
}
