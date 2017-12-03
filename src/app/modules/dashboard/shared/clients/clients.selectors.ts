import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../store/index';
import { IClient, IClientsParams } from './clients.interfaces';

@Injectable()
export class ClientsSelectors {
  private clients$ = this.store.select(state => state.clients.clients);
  private pending$ = this.store.select(state => state.clients.pending);
  private params$ = this.store.select(state => state.clients.params);

  constructor(private store: Store<State>) {}

  public getClients(): Observable<IClient[]> {
    return this.clients$;
  }

  public isPending(): Observable<boolean> {
    return this.pending$;
  }

  public getParams(): Observable<IClientsParams> {
    return this.params$;
  }
}
