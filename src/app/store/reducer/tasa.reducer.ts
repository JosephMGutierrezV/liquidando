import { createReducer, on } from '@ngrx/store';
import * as tasaActions from '../actions/tasas.actions';

export interface StateTasa {
  loader: boolean;
  response: any[];
}

const initialState: StateTasa = {
  loader: false,
  response: [],
};

const _reducerTasa = createReducer(
  initialState,
  on(tasaActions.tasaLoading, (state) => ({
    ...state,
    loader: true,
  })),
  on(tasaActions.tasaSuccess, (state, { response }) => ({
    ...state,
    loader: false,
    response,
  })),
  on(tasaActions.tasaError, (state, { error }) => ({
    ...state,
    loader: false,
    error,
    response: [],
  }))
);

export function reducerTasa(state: any, action: any) {
  return _reducerTasa(state, action);
}
