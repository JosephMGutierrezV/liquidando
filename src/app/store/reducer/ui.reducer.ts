import { createReducer, on } from '@ngrx/store';
import * as ui from '../actions/ui.actions';

export interface StateUI {
  isLoading: boolean;
}

const initialState: StateUI = {
  isLoading: false,
};

const _reducerUi = createReducer(
  initialState,
  on(ui.isLoading, (state, {}) => ({ ...state, isLoading: true })),
  on(ui.isNotLoading, (state, {}) => ({ ...state, isLoading: false }))
);

export function reducerUi(state: any, action: any) {
  return _reducerUi(state, action);
}
