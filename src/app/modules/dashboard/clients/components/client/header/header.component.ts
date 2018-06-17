import { Component, Input } from '@angular/core';

import { IClient } from '../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-client-header',
  template: `
    <div
      fxLayout="row"
      fxLayoutAlign="space-between start"
      class="container">
      <div
        class="text--title">
        {{ client?.name }}
      </div>
      <div
        fxLayout="row"
        fxLayoutAlign="end center"
        fxLayoutGap="20px">
        <span class="text--subtitle">
          auto send is {{ client?.autoSend ? 'on' : 'off' }}
        </span>
        <span
          class="app-button-2">
          <mat-icon
            fxLayoutAlign="center center"
            [routerLink]="['', {outlets: {modal: ['clients', client?.id ,'edit']}}]">
            mode_edit
          </mat-icon>
        </span>
      </div>
    </div>
  `,
  styleUrls: ['../../../containers/client/client.component.scss'],
})
export class ClientHeaderComponent {
  @Input() client: IClient;
}
