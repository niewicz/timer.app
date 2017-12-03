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

import { TimeEntriesComponent } from './time-entries/containers/time-entries/time-entries.component';
import { CurrentTimeEntryComponent } from './time-entries/containers/current-time-entry/current-time-entry.component';

import { TimeEntriesListComponent } from './time-entries/components/time-entries/list/time-entries-list.component';
import { TimeEntriesItemComponent } from './time-entries/components/time-entries/item/time-entries-item.component';

@NgModule({
  declarations: [
    // Layout
    DashboardLayoutComponent,
    // Components
    TimeEntriesListComponent,
    TimeEntriesItemComponent,
    // Containers
    TimeEntriesComponent,
    CurrentTimeEntryComponent,
  ],
  providers: [
    Angular2TokenService,
    TimeEntriesService,
    TimeEntriesDispatchers,
    TimeEntriesSelectors,
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
