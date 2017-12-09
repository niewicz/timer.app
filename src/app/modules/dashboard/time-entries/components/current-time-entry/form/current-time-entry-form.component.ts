import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'timer-current-time-entry-form',
  templateUrl: './current-time-entry-form.component.html',
  styleUrls: ['./current-time-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeEntryFormComponent implements OnInit {
  timeEntry: FormGroup;
  toggling: boolean = false;
  toggled$: any;

  constructor(private fb: FormBuilder) {
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

  ngOnInit() {
    this.toggled$ = Observable.timer(0, 1000).map(tick => {
      return (
        new Date().getTime() -
        new Date(this.timeEntry.get('startAt').value).getTime()
      );
    });
  }

  startToggling() {
    this.toggling = true;
    this.timeEntry.patchValue({ startAt: new Date().toString() });
  }
}
