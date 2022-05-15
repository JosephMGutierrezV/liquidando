import { createReducer, on } from '@ngrx/store';
import { IError } from 'src/app/interfaces/responses.interfaces';
import * as auth from '../actions/auth.actions';

export interface StateLogin {
  user: string;
  psw: string;
  pswRepeat?: string;
  name?: string;
  type?: string;
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
  on(auth.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    psw: '',
    pswRepeat: '',
    name: '',
    type: '',
  })),
  on(auth.loginError, (state, { error }) => ({
    ...state,
    error,
    psw: '',
    user: '',
    token: '',
  })),
  on(auth.logoutLoading, (state) => ({ ...state, token: '' })),
  on(auth.logoutSuccess, (state) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error: {
      message: '',
      code: '',
    },
    pswRepeat: '',
    name: '',
    type: '',
  })),
  on(auth.logoutError, (state, { error }) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error,
    pswRepeat: '',
    name: '',
    type: '',
  })),
  on(auth.registerUserLoading, (state, { dataUser }) => ({
    ...state,
    user: dataUser.email,
    psw: dataUser.password,
    pswRepeat: dataUser.repeatPassword,
    name: dataUser.name,
    type: dataUser.type,
  })),
  on(auth.registerUserSuccess, (state, { response }) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error: {
      message: '',
      code: '',
    },
    pswRepeat: '',
    name: '',
    type: '',
  })),
  on(auth.registerUserError, (state, { error }) => ({
    ...state,
    token: '',
    user: '',
    psw: '',
    error,
    pswRepeat: '',
    name: '',
    type: '',
  }))
);

export function reducerAuth(state: any, action: any) {
  return _reducerAuth(state, action);
}
