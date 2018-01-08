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
import { IProjectResponse } from './projects.interfaces';

@Injectable()
export class ProjectsService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getProjects(params: IProjectsParams): Observable<IProjectsResponse> {
    return this.http
      .get<IProjectsResponse>(this.api.projectsPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offset', params.offset ? params.offset.toString() : '')
          .set('client_id', params.clientId ? params.clientId.toString() : '')
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  createProject(project: IProject): Observable<IProject> {
    project = this.utils.decamelize(project);

    return this.http
      .post<IProjectResponse>(this.api.projectsPath(), { project })
      .map(response => this.utils.camelize(response))
      .map(response => response.project)
      .catch(error => Observable.throw(error));
  }

  removeProject(id: number): Observable<void> {
    return this.http
      .delete(this.api.projectPath(id))
      .catch(error => Observable.throw(error));
  }
}
