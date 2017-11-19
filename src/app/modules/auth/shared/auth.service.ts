import { Injectable } from '@angular/core';

import { Angular2TokenService, SignInData, RegisterData } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: 'http://localhost:3000',
    });
  }

  logIn(logInData: SignInData): void {
    this.tokenService
      .signIn(logInData)
      .subscribe(
        response => console.log(response),
        error => console.log(error),
      );
  }

  signUp(registerData: RegisterData): void {
    this.tokenService
      .registerAccount(registerData)
      .subscribe(
        response => console.log(response),
        erorrs => console.log(erorrs),
      );
  }
}
