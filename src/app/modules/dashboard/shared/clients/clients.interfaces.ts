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
