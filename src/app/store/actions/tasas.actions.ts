import { IError } from 'src/app/interfaces/responses.interfaces';
import { createAction, props } from '@ngrx/store';

export const tasaLoading = createAction('[Tasa] Loading');

export const tasaSuccess = createAction(
  '[Tasa] Success',
  props<{ response: any }>()
);

export const tasaError = createAction(
  '[Tasa] Error',
  props<{ error: IError }>()
);
