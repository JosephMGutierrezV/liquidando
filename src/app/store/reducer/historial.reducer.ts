import { createReducer, on } from '@ngrx/store';
import { IHistorial } from 'src/app/interfaces/responses.interfaces';
import * as historialActions from '../actions/historial.actions';

export interface StateHistorial {
  loader: boolean;
  id: string;
  response: IHistorial[];
}

const initialState: StateHistorial = {
  loader: false,
  id: '',
  response: [],
};

const _reducerHistorial = createReducer(
  initialState,
  on(historialActions.historialLoading, (state, { id }) => ({
    ...state,
    loader: true,
    id,
  })),
  on(historialActions.historialSuccess, (state, { response }) => ({
    ...state,
    loader: false,
    response,
  })),
  on(historialActions.historialError, (state, { error }) => ({
    ...state,
    loader: false,
    error,
  }))
);

export function reducerHistorial(state: any, action: any) {
  return _reducerHistorial(state, action);
}
