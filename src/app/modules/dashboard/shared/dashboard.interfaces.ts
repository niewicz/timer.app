export interface ITimeEntry {
  id?: number;
  taskId?: number;
  startAt: string;
  endAt?: string;
}

export interface ITask {
  id?: number;
  projectId?: number;
  clientId?: number;
  title: string;
  price?: number;
}

export interface IProject {
  id?: number;
  clientId?: number;
  title: string;
  description?: string;
}

export interface IClient {
  id?: number;
  name: string;
  email?: string;
  contactPersonName?: string;
  contactPersonEmail?: string;
}
