import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { State } from '../../../../store/index';
import { ClientsService } from './clients.service';
import { IClient, IClientsParams } from './clients.interfaces';
import * as clientsActions from './clients.actions';

@Injectable()
export class ClientsEffects {
  @Effect()
  getClients$: Observable<Action> = this.actions$
    .ofType(clientsActions.GET_CLIENTS)
    .withLatestFrom(this.store, (action, state) => state.clients.params)
    .switchMap((params: IClientsParams) =>
      this.clientsService
        .getClients(params)
        .map(
          (clients: IClient[]) =>
            new clientsActions.GetClientsSuccessAction(clients),
        )
        .catch((error: any) =>
          Observable.of(new clientsActions.GetClientsFailureAction(error)),
        ),
    );

  @Effect()
  createClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.CREATE_CLIENT)
    .map(toPayload)
    .switchMap((payload: IClient) =>
      this.clientsService
        .createClient(payload)
        .map(
          (client: IClient) =>
            new clientsActions.CreateClientSuccessAction(client),
        )
        .catch((error: any) =>
          Observable.of(new clientsActions.CreateClientFailureAction(error)),
        ),
    );

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private store: Store<State>,
  ) {}
}
