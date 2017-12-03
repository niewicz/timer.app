import { AuthGuard } from './core/guards/auth.guard';
import { AuthSignInComponent } from './modules/auth/containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './modules/auth/containers/sign-up/sign-up.component';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './modules/dashboard/components/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './home.component';
import { TimeEntriesComponent } from './modules/dashboard/time-entries/containers/time-entries/time-entries.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
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
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: TimeEntriesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
