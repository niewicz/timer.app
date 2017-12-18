import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IClient } from '../../../../shared/clients/clients.interfaces';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
})
export class CreateProjectFormComponent {
  @Output() createProject = new EventEmitter<IProject>();

  selectedClient: IClient;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: '',
      clientId: '',
    });
  }

  handleClientChange(event: IClient): void {
    this.selectedClient = event;
    this.form.patchValue({ clientId: event.id });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.createProject.emit(this.form.value);
    }
  }

  removeClient(): void {
    this.selectedClient = undefined;
  }
}
