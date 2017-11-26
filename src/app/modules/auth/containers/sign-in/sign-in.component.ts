import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SignInData } from 'angular2-token';

import { AuthSelectors } from './../../shared/auth.selectors';
import { AuthDispatchers } from '../../shared/auth.dispatchers';

@Component({
  selector: 'timer-sign-in',
  templateUrl: './sign-in.component.html',
})
export class AuthSignInComponent implements OnInit, OnDestroy {
  currentUserSubscription: Subscription;

  constructor(
    private authDispatchers: AuthDispatchers,
    private authSelectors: AuthSelectors,
    private router: Router,
  ) {}

  ngOnInit() {
    this.currentUserSubscription = this.authSelectors
      .getCurrentUser()
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  handleLogIn(logInData: SignInData): void {
    console.log('Loggin in...');
    this.authDispatchers.signInUser(logInData);
  }
}
