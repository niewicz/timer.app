export interface IProject {
  id?: number;
  clientId?: number;
  title: string;
  description?: string;
}

export interface IProjectsParams {
  limit?: number;
  offset?: number;
  clientId?: number;
  q?: string;
}

export interface IProjectsResponse {
  projects: IProject[];
}

export interface IProjectResponse {
  project: IProject;
}
