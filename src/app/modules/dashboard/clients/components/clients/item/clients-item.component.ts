import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { IClient } from '../../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-clients-item',
  templateUrl: './clients-item.component.html',
  styleUrls: ['./clients-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsItemComponent {
  @Input() client: IClient;

  @Output() remove = new EventEmitter<number>();

  showIcons = false;

  onRemove(): void {
    this.remove.emit(this.client.id);
  }

  onMouseover(): void {
    this.showIcons = true;
  }

  onMouseleave(): void {
    this.showIcons = false;
  }
}
