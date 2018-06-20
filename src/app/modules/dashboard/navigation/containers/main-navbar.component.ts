import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollSpyService } from 'ngx-scrollspy';

import { AuthService } from '../../../auth/shared/auth.service';

@Component({
  selector: 'timer-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent implements AfterViewInit {
  scrolled = false;
  getCurrent = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private scrollSpy: ScrollSpyService,
  ) {}

  ngAfterViewInit() {
    this.scrollSpy.getObservable('window').subscribe(e => {
      this.scrolled = e.path[1].scrollY > 50;
      this.getCurrent = false;
    });
  }

  handleLogOut(): void {
    this.authService.signOut();
  }
}
