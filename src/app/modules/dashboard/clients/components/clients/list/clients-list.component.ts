import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { IClient } from '../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-clients-list',
  templateUrl: './clients-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent {
  @Input() clients: IClient[];

  @Output() removeClient = new EventEmitter<number>();

  handleRemoveClient(event: number): void {
    this.removeClient.emit(event);
  }
}
