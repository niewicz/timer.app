import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

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

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ContenteditableDirective } from 'ng-contenteditable';

import { UtilsService } from './../../core/services/utils.service';
import { ApiRoutes } from './../../core/services/api-routes.service';

import { ModalComponent } from './components/modal.component';
import { UserResolver } from '../../core/resolvers/user.resolver';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [ContenteditableDirective, ModalComponent],
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
    PerfectScrollbarModule,
    NgxChartsModule,
    ChartsModule,
    SnotifyModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,

    UtilsService,
    ApiRoutes,

    UserResolver,
  ],
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
    PerfectScrollbarModule,
    NgxChartsModule,
    ChartsModule,
    SnotifyModule,

    ModalComponent,
  ],
})
export class SharedModule {}
