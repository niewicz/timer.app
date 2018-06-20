import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SnotifyService } from 'ng-snotify';

import { State } from '../../../../store/index';
import { ClientsService } from './clients.service';
import {
  IClient,
  IClientsParams,
  IClientsResponse,
} from './clients.interfaces';
import * as clientsActions from './clients.actions';
import { ISendReportPayload } from './clients.interfaces';
import { SendReportSuccessAction } from './clients.actions';

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
          (response: IClientsResponse) =>
            new clientsActions.GetClientsSuccessAction(response),
        )
        .catch((error: any) =>
          Observable.of(new clientsActions.GetClientsFailureAction(error)),
        ),
    );

  @Effect()
  loadMoreClients$: Observable<Action> = this.actions$
    .ofType(clientsActions.LOAD_MORE_CLIENTS)
    .withLatestFrom(this.store, (action, state) => state.clients.params)
    .switchMap((params: IClientsParams) =>
      this.clientsService
        .getClients(params)
        .map(
          (response: IClientsResponse) =>
            new clientsActions.LoadMoreClientsSuccessAction(response),
        )
        .catch((error: any) =>
          Observable.of(new clientsActions.LoadMoreClientsFailureAction(error)),
        ),
    );

  @Effect()
  searchClients$: Observable<Action> = this.actions$
    .ofType(clientsActions.SEARCH_CLIENTS)
    .map(() => new clientsActions.GetClientsAction());

  @Effect()
  getClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.GET_CLIENT)
    .map((action: clientsActions.GetClientAction) => action.payload)
    .switchMap((payload: number) =>
      this.clientsService
        .getClient(payload)
        .map(
          (client: IClient) =>
            new clientsActions.GetClientSuccessAction(client),
        )
        .catch((error: any) =>
          Observable.throw(new clientsActions.GetClientFailureAction(error)),
        ),
    );

  @Effect()
  createClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.CREATE_CLIENT)
    .map((action: clientsActions.CreateClientAction) => action.payload)
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

  @Effect()
  editClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.EDIT_CLIENT)
    .map((action: clientsActions.EditClientAction) => action.payload)
    .switchMap((payload: number) =>
      this.clientsService
        .editClient(payload)
        .map(
          (client: IClient) =>
            new clientsActions.EditClientSuccessAction(client),
        )
        .catch((error: any) =>
          Observable.of(new clientsActions.EditClientFailureAction(error)),
        ),
    );

  @Effect()
  updateClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.UPDATE_CLIENT)
    .map((action: clientsActions.UpdateClientAction) => action.payload)
    .switchMap((payload: IClient) =>
      this.clientsService
        .updateClient(payload)
        .map((client: IClient) => {
          this.notifications.success('We have updated your client details.', {
            showProgressBar: false,
            position: 'centerBottom',
          });
          return new clientsActions.UpdateClientSuccessAction(client);
        })
        .catch((error: any) =>
          Observable.of(new clientsActions.UpdateClientFailureAction(error)),
        ),
    );

  @Effect()
  removeClient$: Observable<Action> = this.actions$
    .ofType(clientsActions.REMOVE_CLIENT)
    .map((action: clientsActions.RemoveClientAction) => action.payload)
    .switchMap((payload: number) =>
      this.clientsService
        .removeClient(payload)
        .map(() => new clientsActions.RemoveClientSuccessAction(payload))
        .catch((error: any) =>
          Observable.of(new clientsActions.RemoveClientFailureAction(error)),
        ),
    );

  @Effect()
  sendReport$: Observable<Action> = this.actions$
    .ofType(clientsActions.SEND_REPORT)
    .map((action: clientsActions.SendReportAction) => action.payload)
    .switchMap((payload: ISendReportPayload) =>
      this.clientsService
        .sendReport(payload)
        .map(() => {
          this.notifications.success(
            `Report for ${payload.time[0].toUpperCase() +
              payload.time.slice(1)} has been sent.`,
            {
              showProgressBar: false,
              position: 'centerBottom',
            },
          );
          return new clientsActions.SendReportSuccessAction();
        })
        .catch((error: any) =>
          Observable.of(new clientsActions.SendReportFailureAction(error)),
        ),
    );

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private store: Store<State>,
    private notifications: SnotifyService,
  ) {}
}
