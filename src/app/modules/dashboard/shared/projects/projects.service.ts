import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import {
  IProjectsParams,
  IProject,
  IProjectsResponse,
} from './projects.interfaces';
import { ApiRoutes } from '../../../../core/services/api-routes.service';

@Injectable()
export class ProjectsService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getProjects(params: IProjectsParams): Observable<IProject[]> {
    return this.http
      .get<IProjectsResponse>(this.api.projectsPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offest', params.offset ? params.offset.toString() : '')
          .set('client_id', params.clientId ? params.clientId.toString() : '')
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.projects)
      .catch(error => Observable.throw(error));
  }
}
