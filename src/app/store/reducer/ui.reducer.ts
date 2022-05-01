import { createReducer, on } from '@ngrx/store';
import { IError, ISuccess } from 'src/app/interfaces/responses.interfaces';
import * as ui from '../actions/ui.actions';

export interface StateUI {
  isLoading: boolean;
  error: IError;
  success: ISuccess;
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
  on(ui.isLoading, (state, {}) => ({
    ...state,
    isLoading: true,
    error: { message: '', code: '' },
    success: { message: '', state: false },
  })),
  on(ui.isNotLoading, (state, {}) => ({
    ...state,
    isLoading: false,
    error: { message: '', code: '' },
    success: { message: '', state: false },
  })),
  on(ui.isError, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
    success: { message: '', state: false },
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
