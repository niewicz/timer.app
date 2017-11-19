import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { AuthService } from './shared/auth.service';

import { SharedModule } from './../shared/shared.module';

import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthSignInComponent } from './containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './containers/sign-up/sign-up.component';
import { AuthSignInFormComponent } from './components/sign-in/sign-in-form/sign-in-form.component';
import { AuthSignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    // Layout
    AuthLayoutComponent,
    // Components
    AuthSignInFormComponent,
    AuthSignUpFormComponent,
    // Containers
    AuthSignInComponent,
    AuthSignUpComponent,
  ],
  providers: [Angular2TokenService, AuthService],
  imports: [
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class AuthModule {}
