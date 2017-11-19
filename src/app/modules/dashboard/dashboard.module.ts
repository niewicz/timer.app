import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { SharedModule } from './../shared/shared.module';

import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    // Layout
    DashboardLayoutComponent,
    // Components
    // Containers
  ],
  providers: [Angular2TokenService],
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
