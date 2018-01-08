import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IClient } from '../../../shared/clients/clients.interfaces';
import { IProject } from '../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnChanges {
  @Input() project: IProject;
  @Input() headerText: string;

  @Output() submitProject = new EventEmitter<IProject>();

  selectedClient: IClient;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: '',
      title: ['', [Validators.required]],
      description: '',
      clientId: '',
    });
  }

  ngOnChanges(): void {
    if (this.project) {
      this.form.patchValue({
        id: this.project.id,
        title: this.project.title,
        description: this.project.description,
        clientId: this.project.clientId,
      });

      this.selectedClient = this.project.client;
    }
  }

  handleClientChange(event: IClient): void {
    this.selectedClient = event;
    this.form.patchValue({ clientId: event.id });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitProject.emit(this.form.value);
    }
  }

  removeClient(): void {
    this.selectedClient = undefined;
  }
}
