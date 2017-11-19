import { environment } from './../../../environments/environment.prod';
import { Angular2TokenService } from 'angular2-token';
import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private authService: Angular2TokenService,
  ) {}

  canActivate() {
    console.log('Auth Guard: ', this.authService.userSignedIn());
    if (this.authService.userSignedIn()) {
      return true;
    }
    this.document.location.href = '/users/sign_in';
  }
}
