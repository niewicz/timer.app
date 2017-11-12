import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthSignInComponent } from './containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './containers/sign-up/sign-up.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    // Layout
    AuthLayoutComponent,
    // Components

    // Containers
    AuthSignInComponent,
    AuthSignUpComponent,
  ],
  providers: [Angular2TokenService, AuthService],
  imports: [HttpModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class AuthModule {}
