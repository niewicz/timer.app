import * as clientsActions from './clients.actions';
import { IClient, IClientsParams } from './clients.interfaces';

export interface ClientsState {
  clients: IClient[];
  params: IClientsParams;
  pending: boolean;
  errors: any;
}

const initialState: ClientsState = {
  clients: undefined,
  params: {
    limit: 15,
    offset: 0,
    q: undefined,
  },
  pending: false,
  errors: undefined,
};

export function reducer(state = initialState, action: clientsActions.Actions) {
  switch (action.type) {
    case clientsActions.GET_CLIENTS:
      return {
        ...state,
        pending: true,
        errors: undefined,
        params: {
          ...state.params,
          limit: 15,
          offset: 0,
        },
      };
    case clientsActions.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: undefined,
        clients: action.payload,
      };
    case clientsActions.GET_CLIENTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    case clientsActions.CREATE_CLIENT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };
    case clientsActions.CREATE_CLIENT_SUCCESS:
      const newList = [...state.clients, action.payload];

      return {
        ...state,
        pending: false,
        clients: newList,
        errors: undefined,
      };

    case clientsActions.CREATE_CLIENT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}
