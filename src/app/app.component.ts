import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Timer App';

  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiBase: 'http://localhost:3000',
    });
  }
}
