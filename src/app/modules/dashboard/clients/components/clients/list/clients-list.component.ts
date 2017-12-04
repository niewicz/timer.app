import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IClient } from '../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-clients-list',
  templateUrl: './clients-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent {
  @Input() clients: IClient[];
}
