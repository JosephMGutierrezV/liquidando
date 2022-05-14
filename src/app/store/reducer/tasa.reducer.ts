import { createReducer, on } from '@ngrx/store';
import * as tasaActions from '../actions/tasas.actions';

export interface StateTasa {
  loading: boolean;
  response: any[];
}

const initialState: StateTasa = {
  loading: false,
  response: [],
};

const _reducerTasa = createReducer(
  initialState,
  on(tasaActions.tasaLoading, (state) => ({
    ...state,
    loading: false,
  })),
  on(tasaActions.tasaSuccess, (state, { response }) => ({
    ...state,
    loading: true,
    response,
  })),
  on(tasaActions.tasaError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    response: [],
  }))
);

export function reducerTasa(state: any, action: any) {
  return _reducerTasa(state, action);
}
