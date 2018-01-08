import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientsDispatchers } from '../../../shared/clients/clients.dispatchers';
import { ClientsSelectors } from './../../../shared/clients/clients.selectors';
import { IClient } from '../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-edit-client',
  templateUrl: './edit-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditClientComponent implements OnInit {
  client$ = this.selectors.getEditClient();

  clientId = parseInt(this.route.snapshot.params.clientId, 10);

  constructor(
    private dispatchers: ClientsDispatchers,
    private selectors: ClientsSelectors,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.dispatchers.editClient(this.clientId);
  }

  handleSubmitClient(event: IClient): void {
    this.dispatchers.updateClient(event);
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
