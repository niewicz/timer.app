import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ClientsDispatchers } from '../../../shared/clients/clients.dispatchers';
import { ClientsSelectors } from '../../../shared/clients/clients.selectors';
import { IClient } from '../../../shared/clients/clients.interfaces';

@Component({
  selector: 'timer-select-client',
  templateUrl: './select-client.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectClientComponent implements OnInit {
  @Input() displayText: string;
  @Input() selectedClient: IClient;

  @Output() newSelectedClient = new EventEmitter<IClient>();

  clients$ = this.selectors.getClients();

  constructor(
    private dispatchers: ClientsDispatchers,
    private selectors: ClientsSelectors,
  ) {}

  ngOnInit(): void {
    this.dispatchers.getClients();
  }

  handleSearch(event: string): void {
    this.dispatchers.searchClients({ q: event });
  }

  handleChoice(event: IClient): void {
    console.log(event);
    this.newSelectedClient.emit(event);
  }

  handleCreate(event: IClient): void {
    this.dispatchers.createClient(event);
  }
}
