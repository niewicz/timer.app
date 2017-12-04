import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { HomeComponent } from './home.component';
import { AuthSignInComponent } from './modules/auth/containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './modules/auth/containers/sign-up/sign-up.component';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './modules/dashboard/components/dashboard-layout/dashboard-layout.component';
import { TimeEntriesComponent } from './modules/dashboard/time-entries/containers/time-entries/time-entries.component';
import { ClientsComponent } from './modules/dashboard/clients/containers/clients/clients.component';
import { ProjectsComponent } from './modules/dashboard/projects/containers/projects/projects.component';

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
      {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'projects',
        component: ProjectsComponent,
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
