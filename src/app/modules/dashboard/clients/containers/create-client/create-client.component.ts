import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { ClientsDispatchers } from './../../../shared/clients/clients.dispatchers';
import { IClient } from '../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-create-client',
  templateUrl: './create-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateClientComponent {
  constructor(
    private dispatchers: ClientsDispatchers,
    private router: Router,
  ) {}

  handleSubmitClient(event: IClient): void {
    this.dispatchers.createClient(event);
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
