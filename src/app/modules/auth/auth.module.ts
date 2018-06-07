import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { SharedModule } from './../shared/shared.module';

import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthSignInComponent } from './containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './containers/sign-up/sign-up.component';
import { AuthSignInFormComponent } from './components/sign-in/sign-in-form/sign-in-form.component';
import { AuthSignUpFormComponent } from './components/sign-up/sign-up-form/sign-up-form.component';

import { AuthSelectors } from './shared/auth.selectors';
import { AuthDispatchers } from './shared/auth.dispatchers';
import { AuthService } from './shared/auth.service';

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
  providers: [
    Angular2TokenService,
    AuthService,
    AuthDispatchers,
    AuthSelectors,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class AuthModule {}
