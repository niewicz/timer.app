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
  ISendReportPayload,
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

  getClient(id: number): Observable<IClient> {
    return this.http
      .get<IClientResponse>(this.api.clientPath(id))
      .map(response => this.utils.camelize(response))
      .map(response => response.client)
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

  editClient(id: number): Observable<IClient> {
    return this.http
      .get<IClientResponse>(this.api.clientEditPath(id))
      .map(response => this.utils.camelize(response))
      .map(response => response.client)
      .catch(error => Observable.throw(error));
  }

  updateClient(client: IClient): Observable<IClient> {
    client = this.utils.decamelize(client);

    return this.http
      .patch<IClientResponse>(this.api.clientPath(client.id), { client })
      .map(response => this.utils.camelize(response))
      .map(response => response.client)
      .catch(error => Observable.throw(error));
  }

  removeClient(id: number): Observable<void> {
    return this.http
      .delete(this.api.clientPath(id))
      .map(response => null)
      .catch(error => Observable.throw(error));
  }

  sendReport(payload: ISendReportPayload): Observable<void> {
    return this.http
      .post(this.api.sendReportPath(payload.id), { time: payload.time })
      .map(response => null)
      .catch(error => Observable.throw(error));
  }
}
