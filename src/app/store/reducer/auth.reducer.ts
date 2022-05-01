import { IError } from './ui.reducer';
import { createReducer, on } from '@ngrx/store';
import * as auth from '../actions/auth.actions';

export interface StateLogin {
  user: string;
  psw: string;
  token: string;
  error: IError;
}

const initialState: StateLogin = {
  user: '',
  psw: '',
  token: '',
  error: {
    message: '',
    code: '',
  },
};

const _reducerAuth = createReducer(
  initialState,
  on(auth.loginLoading, (state, { user, psw }) => ({ ...state, user, psw })),
  on(auth.loginSuccess, (state, { token }) => ({ ...state, token })),
  on(auth.loginError, (state, { error }) => ({ ...state, error })),
  on(auth.loginLoading, (state) => ({ ...state, token: '' })),
  on(auth.logoutSuccess, (state) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error: {
      message: '',
      code: '',
    },
  })),
  on(auth.logoutError, (state, { error }) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error,
  }))
);

export function reducerAuth(state: any, action: any) {
  return _reducerAuth(state, action);
}
