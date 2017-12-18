import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IClient } from './../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-select-client-menu',
  templateUrl: './select-client-menu.component.html',
  styleUrls: ['./select-client-menu.component.scss'],
})
export class SelectClientMenuComponent {
  @Input() clients: IClient[];
  @Input() selected: IClient;
  @Input() text: string;

  @Output() search = new EventEmitter<string>();
  @Output() choice = new EventEmitter<IClient>();
  @Output() create = new EventEmitter<IClient>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  onInput(event: string): void {
    this.search.emit(event);
  }

  onChoice(event: IClient): void {
    this.choice.emit(event);
  }

  onCreate(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
    this.form.reset();
  }
}
