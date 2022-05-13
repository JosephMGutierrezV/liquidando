import { createAction, props } from '@ngrx/store';
import { IError, IHistorial } from 'src/app/interfaces/responses.interfaces';

export const historialLoading = createAction(
  '[Historial] Loading',
  props<{ id: string }>()
);

export const historialSuccess = createAction(
  '[Historial] Success',
  props<{ response: IHistorial[] }>()
);

export const historialError = createAction(
  '[Historial] Error',
  props<{ error: IError }>()
);

