import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { SharedModule } from './../shared/shared.module';

import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

import { TimeEntriesService } from './shared/time-entries/time-entries.service';
import { TimeEntriesDispatchers } from './shared/time-entries/time-entries.dispatchers';
import { TimeEntriesSelectors } from './shared/time-entries/time-entries.selectors';
import { ClientsService } from './shared/clients/clients.service';
import { ClientsDispatchers } from './shared/clients/clients.dispatchers';
import { ClientsSelectors } from './shared/clients/clients.selectors';
import { ProjectsService } from './shared/projects/projects.service';
import { ProjectsDispatchers } from './shared/projects/projects.dispatchers';
import { ProjectsSelectors } from './shared/projects/projects.selectors';
import { TasksService } from './shared/tasks/tasks.service';
import { TasksDispatchers } from './shared/tasks/tasks.dispatchers';
import { TasksSelectors } from './shared/tasks/tasks.selectors';

import { TimeEntriesComponent } from './time-entries/containers/time-entries/time-entries.component';
import { CurrentTimeEntryComponent } from './time-entries/containers/current-time-entry/current-time-entry.component';
import { ClientsComponent } from './clients/containers/clients/clients.component';

import { TimeEntriesListComponent } from './time-entries/components/time-entries/list/time-entries-list.component';
import { TimeEntriesItemComponent } from './time-entries/components/time-entries/item/time-entries-item.component';
import { ClientsListComponent } from './clients/components/clients/list/clients-list.component';
import { ClientsItemComponent } from './clients/components/clients/item/clients-item.component';

@NgModule({
  declarations: [
    // Layout
    DashboardLayoutComponent,
    // Components
    TimeEntriesListComponent,
    TimeEntriesItemComponent,
    ClientsListComponent,
    ClientsItemComponent,
    // Containers
    TimeEntriesComponent,
    CurrentTimeEntryComponent,
    ClientsComponent,
  ],
  providers: [
    Angular2TokenService,

    TimeEntriesService,
    TimeEntriesDispatchers,
    TimeEntriesSelectors,
    ClientsService,
    ClientsDispatchers,
    ClientsSelectors,
    ProjectsService,
    ProjectsDispatchers,
    ProjectsSelectors,
    TasksService,
    TasksDispatchers,
    TasksSelectors,
  ],
  imports: [
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class DashboardModule {}
