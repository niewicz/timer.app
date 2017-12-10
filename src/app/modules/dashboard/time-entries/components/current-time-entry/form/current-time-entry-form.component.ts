import { UtilsService } from './../../../../../../core/services/utils.service';
import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ITransferTimeEntry } from './../../../../shared/time-entries/time-entries.interfaces';

@Component({
  selector: 'timer-current-time-entry-form',
  templateUrl: './current-time-entry-form.component.html',
  styleUrls: ['./current-time-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CurrentTimeEntryFormComponent implements OnInit {
  showMenu = false;

  timeEntry: FormGroup;
  toggling = false;
  toggled$: Subscription;
  duration = '00:00:00';

  @Output() menu = new EventEmitter<boolean>();
  @Output() stop = new EventEmitter<ITransferTimeEntry>();

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private utils: UtilsService,
  ) {
    this.timeEntry = this.fb.group({
      taskId: '',
      taskTitle: '',
      projectId: '',
      projectTitle: '',
      clientId: '',
      clientName: '',
      price: '',
      currency: '',
      startAt: '',
      endAt: '',
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.menu.emit(this.showMenu);
  }

  startToggling() {
    this.toggled$ = Observable.timer(0, 1000).subscribe(tick => {
      this.duration = this.utils.getDuration(
        new Date().toString(),
        this.timeEntry.get('startAt').value,
      );
      this.cd.detectChanges();
    });
    this.toggling = true;
    this.timeEntry.patchValue({ startAt: new Date().toString() });
  }

  stopToggling() {
    this.toggling = false;
    this.toggled = '00:00:00';
    this.toggled$.unsubscribe();
  }
}
