import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [],
  imports: [
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
  providers: [UtilsService],
  exports: [
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
