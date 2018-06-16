import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientsDispatchers } from '../../../shared/clients/clients.dispatchers';
import { ClientsSelectors } from '../../../shared/clients/clients.selectors';

@Component({
  selector: 'timer-client',
  template: `
  <timer-client-header
    [client]="client$ | async">
  </timer-client-header>

  <timer-client-projects
    [projects]="(client$ | async)?.projects">
  </timer-client-projects>
  `,
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  client$ = this.selectors.getClientDetails();

  clientId = parseInt(this.route.snapshot.params.clientId, 10);

  constructor(
    private dispatchers: ClientsDispatchers,
    private selectors: ClientsSelectors,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.dispatchers.getClient(this.clientId);
  }
}
