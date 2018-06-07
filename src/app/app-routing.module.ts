import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { UserResolver } from './core/resolvers/user.resolver';

import { HomeComponent } from './home.component';
import { AuthSignInComponent } from './modules/auth/containers/sign-in/sign-in.component';
import { AuthSignUpComponent } from './modules/auth/containers/sign-up/sign-up.component';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './modules/dashboard/components/dashboard-layout/dashboard-layout.component';
import { TimeEntriesComponent } from './modules/dashboard/time-entries/containers/time-entries/time-entries.component';
import { ClientsComponent } from './modules/dashboard/clients/containers/clients/clients.component';
import { ProjectsComponent } from './modules/dashboard/projects/containers/projects/projects.component';
import { CreateProjectComponent } from './modules/dashboard/projects/containers/create-project/create-project.component';
import { EditProjectComponent } from './modules/dashboard/projects/containers/edit-project/edit-project.component';
import { CreateClientComponent } from './modules/dashboard/clients/containers/create-client/create-client.component';
import { EditClientComponent } from './modules/dashboard/clients/containers/edit-client/edit-client.component';
import { ClientComponent } from './modules/dashboard/clients/containers/client/client.component';
import { ProjectComponent } from './modules/dashboard/projects/containers/project/project.component';
import { SummaryComponent } from './modules/dashboard/summaries/containers/summary/summary.component';
import { SettingsComponent } from './modules/dashboard/settings/containers/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: {
      user: UserResolver,
    },
  },
  {
    path: 'users',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sign_in',
        component: AuthSignInComponent,
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'sign_up',
        component: AuthSignUpComponent,
        resolve: {
          user: UserResolver,
        },
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
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'clients/:clientId',
        component: ClientComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'projects/:projectId',
        component: ProjectComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'summaries',
        component: SummaryComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: UserResolver,
        },
      },
    ],
  },
  {
    path: 'projects/create',
    component: CreateProjectComponent,
    outlet: 'modal',
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/:projectId/edit',
    component: EditProjectComponent,
    outlet: 'modal',
    canActivate: [AuthGuard],
  },
  {
    path: 'clients/create',
    component: CreateClientComponent,
    outlet: 'modal',
    canActivate: [AuthGuard],
  },
  {
    path: 'clients/:clientId/edit',
    component: EditClientComponent,
    outlet: 'modal',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
