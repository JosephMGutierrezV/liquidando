import { createReducer, on } from '@ngrx/store';
import * as ui from '../actions/ui.actions';

export interface StateUI {
  isLoading: boolean;
  error: IError;
  success: ISuccess;
}

export interface ISuccess {
  message: string;
  state: boolean;
}
export interface IError {
  message: string;
  code: string;
}

const initialState: StateUI = {
  isLoading: false,
  error: {
    message: '',
    code: '',
  },
  success: {
    message: '',
    state: false,
  },
};

const _reducerUi = createReducer(
  initialState,
  on(ui.isLoading, (state, {}) => ({ ...state, isLoading: true })),
  on(ui.isNotLoading, (state, {}) => ({ ...state, isLoading: false })),
  on(ui.isError, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),
  on(ui.isSuccess, (state, { success }) => ({
    ...state,
    success: success,
    isLoading: false,
  }))
);

export function reducerUi(state: any, action: any) {
  return _reducerUi(state, action);
}
