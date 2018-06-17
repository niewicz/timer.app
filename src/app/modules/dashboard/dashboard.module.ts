import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollSpyModule } from 'ngx-scrollspy';
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
import { SummariesService } from './shared/summaries/summaries.service';
import { SummariesDispatchers } from './shared/summaries/summaries.dispatchers';
import { SummariesSelectors } from './shared/summaries/summaries.selectors';

import { MainNavbarComponent } from './navigation/containers/main-navbar.component';
import { TimeEntriesComponent } from './time-entries/containers/time-entries/time-entries.component';
import { CurrentTimeEntryComponent } from './time-entries/containers/current-time-entry/current-time-entry.component';
import { ClientsComponent } from './clients/containers/clients/clients.component';
import { ProjectsComponent } from './projects/containers/projects/projects.component';
import { TasksComponent } from './tasks/containers/tasks/tasks.component';
import { SelectProjectMenuComponent } from './projects/components/select-project/menu/select-project-menu.component';
import { ProjectFormComponent } from './projects/components/project-form/project-form.component';
import { SelectClientComponent } from './clients/containers/select-client/select-client.component';
import { SelectTaskComponent } from './tasks/containers/select-task/select-task.component';
import { EditProjectComponent } from './projects/containers/edit-project/edit-project.component';
import { CreateClientComponent } from './clients/containers/create-client/create-client.component';
import { EditClientComponent } from './clients/containers/edit-client/edit-client.component';
import { ProjectComponent } from './projects/containers/project/project.component';
import { ClientComponent } from './clients/containers/client/client.component';
import { SummaryComponent } from './summaries/containers/summary/summary.component';
import { SettingsComponent } from './settings/containers/settings/settings.component';

import { MainNavbarMenuComponent } from './navigation/components/main-navbar/menu/main-navbar-menu.component';
import { TimeEntriesListComponent } from './time-entries/components/time-entries/list/time-entries-list.component';
import { TimeEntriesItemComponent } from './time-entries/components/time-entries/item/time-entries-item.component';
import { ClientsListComponent } from './clients/components/clients/list/clients-list.component';
import { ClientsItemComponent } from './clients/components/clients/item/clients-item.component';
import { ProjectsItemComponent } from './projects/components/projects/item/projects-item.component';
import { ProjectsListComponent } from './projects/components/projects/list/projects-list.component';
import { TasksListComponent } from './tasks/components/tasks/list/tasks-list.component';
import { TasksItemComponent } from './tasks/components/tasks/item/tasks-item.component';
import { CurrentTimeEntryFormComponent } from './time-entries/components/current-time-entry/form/current-time-entry-form.component';
import { SelectProjectComponent } from './projects/containers/select-project/select-project.component';
import { CreateProjectComponent } from './projects/containers/create-project/create-project.component';
import { SelectClientMenuComponent } from './clients/components/select-client/menu/select-client-menu.component';
import { SelectTaskMenuComponent } from './tasks/components/select-task/menu/select-task-menu.component';
import { ClientsTopBarComponent } from './clients/components/clients/top-bar/clients-top-bar.component';
import { ProjectsTopBarComponent } from './projects/components/projects/top-bar/projets-top-bar.component';
import { ClientFormComponent } from './clients/components/client-form/client-form.component';
import { SummaryChartComponent } from './summaries/components/summary/chart/chart.component';
import { SummaryLastProjectsComponent } from './summaries/components/summary/last-projects/last-projects.component';
import { ProjectHeaderComponent } from './projects/components/project/header/header.component';
import { ProjectTaskComponent } from './projects/components/project/task/task.component';
import { ProjectTasksComponent } from './projects/components/project/tasks/tasks.component';
import { ClientHeaderComponent } from './clients/components/client/header/header.component';
import { ClientProjectsComponent } from './clients/components/client/projects/projects.component';
import { ClientProjectComponent } from './clients/components/client/project/project.component';
import { ClientSendReportComponent } from './clients/components/client/send-report/send-report.component';

@NgModule({
  declarations: [
    // Layout
    DashboardLayoutComponent,
    // Components
    MainNavbarMenuComponent,

    TimeEntriesListComponent,
    TimeEntriesItemComponent,

    CurrentTimeEntryFormComponent,

    ClientsListComponent,
    ClientsItemComponent,
    ClientsTopBarComponent,
    SelectClientMenuComponent,
    ClientFormComponent,
    ClientHeaderComponent,
    ClientProjectsComponent,
    ClientProjectComponent,
    ClientSendReportComponent,

    ProjectsListComponent,
    ProjectsItemComponent,
    ProjectsTopBarComponent,
    ProjectHeaderComponent,
    ProjectTaskComponent,
    ProjectTasksComponent,
    SelectProjectMenuComponent,
    ProjectFormComponent,

    TasksListComponent,
    TasksItemComponent,
    SelectTaskMenuComponent,

    SummaryChartComponent,
    SummaryLastProjectsComponent,
    // Containers
    MainNavbarComponent,

    TimeEntriesComponent,
    CurrentTimeEntryComponent,

    ClientsComponent,
    SelectClientComponent,

    ProjectsComponent,
    SelectProjectComponent,
    CreateProjectComponent,
    EditProjectComponent,

    TasksComponent,
    SelectTaskComponent,

    CreateClientComponent,
    EditClientComponent,
    ProjectComponent,
    ClientComponent,

    SummaryComponent,

    SettingsComponent,
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

    SummariesService,
    SummariesDispatchers,
    SummariesSelectors,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ScrollSpyModule,
  ],
  exports: [],
})
export class DashboardModule {}
