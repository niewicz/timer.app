import { IClient } from '../clients/clients.interfaces';

export interface IProject {
  id?: number;
  clientId?: number;
  title: string;
  description?: string;
  client?: IClient;
}

export interface IProjectsParams {
  limit?: number;
  offset?: number;
  clientId?: number;
  q?: string;
}

export interface IProjectsResponse {
  projects: IProject[];
  total: number;
}

export interface IProjectResponse {
  project: IProject;
}
