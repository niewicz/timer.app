import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import { ApiRoutes } from '../../../../core/services/api-routes.service';
import {
  IClient,
  IClientsResponse,
  IClientResponse,
  IClientsParams,
} from './clients.interfaces';

@Injectable()
export class ClientsService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getClients(params: IClientsParams): Observable<IClientsResponse> {
    return this.http
      .get<IClientsResponse>(this.api.clientsPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offset', params.offset ? params.offset.toString() : '')
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  createClient(client: IClient): Observable<IClient> {
    client = this.utils.decamelize(client);

    return this.http
      .post<IClientResponse>(this.api.clientsPath(), { client })
      .map(response => this.utils.camelize(response))
      .map(response => response.client)
      .catch(error => Observable.throw(error));
  }
}
