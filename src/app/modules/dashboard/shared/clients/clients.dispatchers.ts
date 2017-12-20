import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as clientsActions from './clients.actions';

import { State } from '../../../../store/index';
import { IClientsParams, IClient } from './clients.interfaces';

@Injectable()
export class ClientsDispatchers {
  constructor(private store: Store<State>) {}

  public getClients(): void {
    this.store.dispatch(new clientsActions.GetClientsAction());
  }

  public searchClients(params: IClientsParams): void {
    this.store.dispatch(new clientsActions.SearchClientsAction(params));
  }

  public createClient(client: IClient): void {
    this.store.dispatch(new clientsActions.CreateClientAction(client));
  }
}
