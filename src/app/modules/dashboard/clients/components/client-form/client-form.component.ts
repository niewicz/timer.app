import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IClient } from '../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnChanges {
  @Input() client: IClient;

  @Output() submitClient = new EventEmitter<IClient>();

  selectedClient: IClient;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: '',
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      contactPersonName: '',
      contactPersonEmail: ['', [Validators.email]],
    });
  }

  ngOnChanges(): void {
    if (this.client) {
      this.form.patchValue({
        id: this.client.id,
        name: this.client.name,
        email: this.client.email,
        contactPersonName: this.client.contactPersonName,
        contactPersonEmail: this.client.contactPersonEmail,
      });
    }
  }

  onSubmit(): void {
    if (this.form.controls.name.valid) {
      this.submitClient.emit(this.form.value);
    }
  }
}
