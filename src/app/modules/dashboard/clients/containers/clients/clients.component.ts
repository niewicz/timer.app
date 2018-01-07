import { ClientsSelectors } from './../../../shared/clients/clients.selectors';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientsDispatchers } from '../../../shared/clients/clients.dispatchers';

@Component({
  selector: 'timer-clients',
  templateUrl: './clients.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  clients$ = this.clientsSelectors.getClients();
  pending$ = this.clientsSelectors.isPending();
  total$ = this.clientsSelectors.getTotal();

  constructor(
    private clientsDispatchers: ClientsDispatchers,
    private clientsSelectors: ClientsSelectors,
  ) {
    this.clientsDispatchers.getClients();
  }

  handleRemoveClient(event: number): void {
    this.clientsDispatchers.removeClient(event);
  }
}
