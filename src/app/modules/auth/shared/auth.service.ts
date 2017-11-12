import { Injectable } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: 'https://localhost:3000',
    });
  }

  logIn(email: string, password: string): void {
    this.tokenService
      .signIn({
        email: email,
        password: password,
      })
      .subscribe(
        response => console.log(response),
        error => console.log(error),
      );
  }

  signUp(email: string, password: string, passwordConfirmation: string): void {
    this.tokenService
      .registerAccount({
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      })
      .subscribe(
        response => console.log(response),
        erorrs => console.log(erorrs),
      );
  }
}
