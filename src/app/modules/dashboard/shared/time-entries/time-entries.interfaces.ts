export interface ITimeEntry {
  id?: number;
  taskId?: number;
  startAt: string;
  endAt?: string;
  task?: ITask;
  project?: IProject;
  client?: IClient;
}

export interface ITimeEntriesParams {
  limit?: number;
  offset?: number;
  taskId?: number;
  since?: string;
  to?: string;
}

export interface ITimeEntriesResponse {
  timeEntries: ITimeEntry[];
}

export interface ITimeEntryResponse {
  timeEntry: ITimeEntry;
}

export interface ITask {
  id?: number;
  projectId?: number;
  clientId?: number;
  title: string;
  price?: number;
}

export interface ITasksParams {
  limit?: number;
  offset?: number;
  clientId?: number;
  projectId?: number;
  q?: string;
}

export interface ITasksResponse {
  tasks: ITask[];
}

export interface ITaskResponse {
  task: ITask;
}

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

export interface IClient {
  id?: number;
  name: string;
  email?: string;
  contactPersonName?: string;
  contactPersonEmail?: string;
}

export interface IClientsParams {
  limit?: number;
  offset?: number;
  q?: string;
}

export interface IClientsResponse {
  clients: IClient[];
}

export interface IClientResponse {
  client: IClient;
}
