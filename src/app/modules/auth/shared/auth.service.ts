import { Injectable } from '@angular/core';
import { Angular2TokenService, SignInData, RegisterData } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from './../../../core/services/utils.service';
import { AuthDispatchers } from './auth.dispatchers';
import { IUser } from './auth.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private tokenService: Angular2TokenService,
    private utils: UtilsService,
  ) {}

  logIn(logInData: SignInData): Observable<IUser> {
    return this.tokenService
      .signIn(logInData)
      .map(response => {
        console.log(response);
        this._reverseParseAuthToken();
        return response.json();
      })
      .map(response => response.data)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  signUp(registerData: RegisterData): Observable<IUser> {
    return this.tokenService
      .registerAccount(registerData)
      .map(response => response.json())
      .map(response => response.data)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
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
    localStorage.removeItem('authHeaders');
  }

  private _parseAuthToken() {
    const authHeaders = JSON.parse(this._retrieveValue('authHeaders'));
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
      'access-token': localStorage.getItem('access-token'),
      'token-type': localStorage.getItem('tokenType'),
      client: localStorage.getItem('client'),
      expiry: localStorage.getItem('expiry'),
      uid: localStorage.getItem('uid'),
    };
    localStorage.setItem('authHeaders', JSON.stringify(authHeaders));
  }
}
