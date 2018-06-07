import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { AuthService } from '../../modules/auth/shared/auth.service';
import { AuthDispatchers } from '../../modules/auth/shared/auth.dispatchers';
import { AuthSelectors } from '../../modules/auth/shared/auth.selectors';

@Injectable()
export class UserResolver implements Resolve<any> {
  currentUser$ = this.authSelectors.getCurrentUser();

  constructor(
    private authService: AuthService,
    private authDispatchers: AuthDispatchers,
    private authSelectors: AuthSelectors,
  ) {}

  resolve() {
    if (this.authService.isLoggedIn()) {
      this.currentUser$.subscribe(user => {
        if (!user) {
          this.authDispatchers.getCurrentUser();
        }
      });
    }
  }
}
