import { AuthSignInComponent } from './modules/auth/containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './modules/auth/containers/sign-up/sign-up.component';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sign_in',
        component: AuthSignInComponent,
      },
      {
        path: 'sign_up',
        component: AuthSignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
