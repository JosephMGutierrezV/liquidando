import { createReducer, on } from '@ngrx/store';
import * as historialActions from '../actions/historial.actions';

export interface StateHistorial {
  loading: boolean;
  id: string;
  response: any;
}

const initialState: StateHistorial = {
  loading: false,
  id: '',
  response: {
    data: [],
  },
};

const _reducerHistorial = createReducer(
  initialState,
  on(historialActions.historialLoading, (state, { id }) => ({
    ...state,
    loading: false,
    id,
  })),
  on(historialActions.historialSuccess, (state, { response }) => ({
    ...state,
    loading: true,
    response,
  })),
  on(historialActions.historialError, (state, { error }) => ({
    ...state,
    loading: false,
    response: {},
    error,
  }))
);

export function reducerHistorial(state: any, action: any) {
  return _reducerHistorial(state, action);
}
