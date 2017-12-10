import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import {
  ITimeEntriesParams,
  ITimeEntry,
  ITimeEntriesResponse,
  ITransferTimeEntry,
  ITimeEntryResponse,
} from './time-entries.interfaces';
import { ApiRoutes } from '../../../../core/services/api-routes.service';

@Injectable()
export class TimeEntriesService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getTimeEntries(params: ITimeEntriesParams): Observable<ITimeEntry[]> {
    return this.http
      .get<ITimeEntriesResponse>(this.api.timeEntriesPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offest', params.offset ? params.offset.toString() : '')
          .set('since', params.since ? params.since.toString() : '')
          .set('to', params.to ? params.to.toString() : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.timeEntries)
      .catch(error => Observable.throw(error));
  }

  createTimeEntry(params: ITransferTimeEntry): Observable<ITimeEntry> {
    return this.http
      .post<ITimeEntryResponse>(this.api.timeEntriesPath(), {
        time_entry: this.utils.decamelize(params),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.timeEntry)
      .catch(error => Observable.throw(error));
  }
}
