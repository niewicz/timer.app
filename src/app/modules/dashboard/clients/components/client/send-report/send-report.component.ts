import { Component, EventEmitter, Output } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'timer-client-send-report',
  template: `
    <div
      class="container"
      fxLayout="column"
      fxLayoutAlign="start start"
      fxLayoutGap="30px">
      <div
        class="app-button-2 text--subtitle"
        (click)="toggleShowSendReport()">
        send report
      </div>
      <div
        *ngIf="showSendReport"
        fxLayout="row"
        fxLayoutGap="10px">
        <div
          [matMenuTriggerFor]="monthsMenu"
          fxLayout="row"
          class="text--subtitle select">
          <span>
            {{ selectedMonth || 'select month' }}
          </span>
          <mat-icon>
            arrow_drop_down
          </mat-icon>
        </div>

        <mat-menu
          #monthsMenu
          [overlapTrigger]="false">
          <div
            *ngFor="let month of months"
            class="menu-item months-menu-item"
            (click)="onSelectMonth(month)">
            {{ month }}
          </div>
        </mat-menu>

        <div
          [matMenuTriggerFor]="yearsMenu"
          fxLayout="row"
          class="text--subtitle select">
          <span>
            {{ selectedYear || 'select year' }}
          </span>
          <mat-icon>
            arrow_drop_down
          </mat-icon>
        </div>

        <mat-menu
          #yearsMenu
          [overlapTrigger]="false">
          <div
            *ngFor="let year of years"
            class="menu-item years-menu-item"
            (click)="onSelectYear(year)">
            {{ year }}
          </div>
        </mat-menu>

        <div
          class="app-button disabled"
          (click)="onSendReport()">
          send now
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../../containers/client/client.component.scss'],
})
export class ClientSendReportComponent {
  @Output() sendReport = new EventEmitter<string>();

  months: string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  selectedMonth: string;
  years: number[] = this.range(1999, new Date().getFullYear());
  selectedYear: number;
  showSendReport = false;

  constructor(private notifications: SnotifyService) {}

  toggleShowSendReport(): void {
    this.showSendReport = !this.showSendReport;
  }

  onSelectMonth(month: string): void {
    this.selectedMonth = month;
  }

  onSelectYear(year: number): void {
    this.selectedYear = year;
  }

  onSendReport(): void {
    if (this.selectedMonth && this.selectedYear) {
      this.sendReport.emit(this.selectedMonth + ' ' + this.selectedYear);
    } else {
      this.notifications.warning('Please select month and year first.', {
        showProgressBar: false,
        timeout: 3000,
        position: 'centerBottom',
      });
    }
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start }, (v, k) => end - k);
  }
}
