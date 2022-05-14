import { createAction, props } from '@ngrx/store';
import {
  IError,
  IHistorialData,
} from 'src/app/interfaces/responses.interfaces';

export const historialLoading = createAction(
  '[Historial] Loading',
  props<{ id: string }>()
);

export const historialSuccess = createAction(
  '[Historial] Success',
  props<{ response: any }>()
);

export const historialError = createAction(
  '[Historial] Error',
  props<{ error: IError }>()
);
