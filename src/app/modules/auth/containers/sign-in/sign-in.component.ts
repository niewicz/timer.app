import { Component } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { SignInData } from 'angular2-token';

@Component({
  selector: 'timer-sign-in',
  templateUrl: './sign-in.component.html',
})
export class AuthSignInComponent {
  constructor(private auth: AuthService) {}

  handleLogIn(logInData: SignInData): void {
    this.auth.logIn(logInData);
  }
}
