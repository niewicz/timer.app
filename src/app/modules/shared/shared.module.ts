import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatCardModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { UtilsService } from './../../core/services/utils.service';
import { ApiRoutes } from './../../core/services/api-routes.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatCardModule,

    FlexLayoutModule,
  ],
  providers: [UtilsService, ApiRoutes],
  exports: [
    CommonModule,

    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatCardModule,

    FlexLayoutModule,
  ],
})
export class SharedModule {}
