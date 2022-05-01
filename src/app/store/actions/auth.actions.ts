import { createAction, props } from '@ngrx/store';
import { IError } from '../reducer/ui.reducer';

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
