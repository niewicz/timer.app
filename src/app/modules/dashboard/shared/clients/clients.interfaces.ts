import { IProject } from '../projects/projects.interfaces';

export interface IClient {
  id?: number;
  name: string;
  email?: string;
  autoSend: boolean;
  contactPersonName?: string;
  contactPersonEmail?: string;
  projectsCounter?: number;
  lastProject?: IProject;
  projects?: IProject[];
}

export interface IClientsParams {
  limit?: number;
  offset?: number;
  q?: string;
}

export interface ISendReportPayload {
  time: string;
  id: number;
}

export interface IClientsResponse {
  clients: IClient[];
  total: number;
}

export interface IClientResponse {
  client: IClient;
}
