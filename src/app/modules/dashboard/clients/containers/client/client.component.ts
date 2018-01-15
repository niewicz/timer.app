import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientsDispatchers } from '../../../shared/clients/clients.dispatchers';
import { ClientsSelectors } from '../../../shared/clients/clients.selectors';

@Component({
  selector: 'timer-client',
  templateUrl: './client.component.html'
}) export class ClientComponent implements OnInit {
  client$ = this.selectors.getClientDetails();

  clientId = parseInt(this.route.snapshot.params.clientId, 10);

  constructor(
    private dispatchers: ClientsDispatchers,
    private selectors: ClientsSelectors,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dispatchers.getClient(this.clientId);
  }
}
