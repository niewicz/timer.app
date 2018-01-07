import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IClient } from '../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-clients-item',
  templateUrl: './clients-item.component.html',
  styleUrls: ['./clients-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsItemComponent {
  @Input() client: IClient;
}
