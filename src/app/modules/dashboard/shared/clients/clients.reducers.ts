import * as clientsActions from './clients.actions';
import { IClient, IClientsParams } from './clients.interfaces';

export interface ClientsState {
  clientDetails: IClient;
  clients: IClient[];
  editClient: IClient;
  params: IClientsParams;
  pending: boolean;
  errors: any;
  total: number;
}

const initialState: ClientsState = {
  clientDetails: undefined,
  clients: undefined,
  editClient: undefined,
  params: {
    limit: 15,
    offset: 0,
    q: undefined,
  },
  pending: false,
  errors: undefined,
  total: undefined,
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
        clients: action.payload.clients,
        total: action.payload.total,
      };

    case clientsActions.GET_CLIENTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case clientsActions.LOAD_MORE_CLIENTS:
      return {
        ...state,
        pending: true,
        errors: undefined,
        params: {
          ...state.params,
          limit: 15,
          offset: state.clients.length,
        },
      };

    case clientsActions.LOAD_MORE_CLIENTS_SUCCESS:
      const afterLoadMore = state.clients.concat(action.payload.clients);

      return {
        ...state,
        pending: false,
        errors: undefined,
        clients: afterLoadMore,
        total: action.payload.total,
      };

    case clientsActions.LOAD_MORE_CLIENTS_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case clientsActions.SEARCH_CLIENTS:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.payload.q,
        },
      };

    case clientsActions.GET_CLIENT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case clientsActions.GET_CLIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        clientDetails: action.payload,
        errors: undefined,
      };

    case clientsActions.GET_CLIENT_FAILURE:
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

    case clientsActions.EDIT_CLIENT:
      return {
        ...state,
        pending: true,
        errors: undefined,
        editClient: undefined,
      };

    case clientsActions.EDIT_CLIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        editClient: action.payload,
        errors: undefined,
      };

    case clientsActions.EDIT_CLIENT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case clientsActions.UPDATE_CLIENT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case clientsActions.UPDATE_CLIENT_SUCCESS:
      const updatedClient = action.payload;
      const updatedList = state.clients.slice();
      const indexOfUpdated = updatedList.findIndex(
        c => c.id === updatedClient.id,
      );
      updatedList.splice(indexOfUpdated, 1, updatedClient);

      return {
        ...state,
        pending: false,
        clients: updatedList,
        errors: undefined,
      };

    case clientsActions.UPDATE_CLIENT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    case clientsActions.REMOVE_CLIENT:
      return {
        ...state,
        pending: true,
        errors: undefined,
      };

    case clientsActions.REMOVE_CLIENT_SUCCESS:
      const afterClientRemoval = state.clients.filter(
        c => c.id !== action.payload,
      );

      return {
        ...state,
        pending: false,
        clients: afterClientRemoval,
        errors: undefined,
        total: state.total - 1,
      };

    case clientsActions.REMOVE_CLIENT_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
