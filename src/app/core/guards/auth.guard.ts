import { Angular2TokenService } from 'angular2-token';
import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: Angular2TokenService,
    private router: Router,
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.validateToken().subscribe(
        () => {
          resolve(true);
        },
        error => {
          this.router.navigate(['users', 'sign_in']);
          resolve(false);
        },
      );
    });
  }
}
