import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: Angular2TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const authData = this.authService.currentAuthData;

    if (authData) {
      request = request.clone({
        setHeaders: {
          'access-token': authData.accessToken,
          client: authData.client,
          expiry: authData.expiry,
          'token-type': authData.tokenType,
          uid: authData.uid,
        },
      });
    }

    return next.handle(request);
  }
}
