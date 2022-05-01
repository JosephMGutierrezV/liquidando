import { IRequestRegistro } from './../../interfaces/request.interfaces';
import { createAction, props } from '@ngrx/store';
import { IError } from 'src/app/interfaces/responses.interfaces';

export const loginLoading = createAction(
  '[Auth] Login Loading',
  props<{ psw: string; user: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{ error: IError }>()
);

export const logoutLoading = createAction('[Auth] Logout Loading');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutError = createAction(
  '[Auth] Logout Error',
  props<{ error: IError }>()
);

export const registerUserLoading = createAction(
  '[Auth] Register User Loading',
  props<{ dataUser: IRequestRegistro }>()
);

export const registerUserSuccess = createAction(
  '[Auth] Register User Success',
  props<{ response: number }>()
);

export const registerUserError = createAction(
  '[Auth] Register User Error',
  props<{ error: IError }>()
);
