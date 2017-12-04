import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as clientsActions from './clients.actions';
import { State } from '../../../../store/index';
import { IClientsParams } from './clients.interfaces';

@Injectable()
export class ClientsDispatchers {
  constructor(private store: Store<State>) {}

  public getClients(): void {
    this.store.dispatch(new clientsActions.GetClientsAction());
  }
}
