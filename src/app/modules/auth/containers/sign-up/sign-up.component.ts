import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterData } from 'angular2-token';

import { AuthDispatchers } from '../../shared/auth.dispatchers';
import { Subscription } from 'rxjs/Subscription';
import { AuthSelectors } from '../../shared/auth.selectors';

@Component({
  selector: 'timer-sign-up',
  templateUrl: './sign-up.component.html',
})
export class AuthSignUpComponent implements OnInit, OnDestroy {
  currentUser$: Subscription;

  constructor(
    private dispatchers: AuthDispatchers, 
    private selectors: AuthSelectors, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectors
      .getCurrentUser()
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy(): void {
    this.currentUser$.unsubscribe();
  }

  handleSignUp(registerData: RegisterData): void {
    this.dispatchers.createUser(registerData);
  }
}
