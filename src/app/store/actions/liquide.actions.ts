import { IRequestAbono } from './../../interfaces/request.interfaces';
import { createAction, props } from '@ngrx/store';
import { IRequestCalculo } from 'src/app/interfaces/request.interfaces';
import { ICalculo, IError } from 'src/app/interfaces/responses.interfaces';

export const calculoLoading = createAction(
  '[Liquide] Calculo Loading',
  props<{ request: IRequestCalculo }>()
);

export const calculoSuccess = createAction(
  '[Liquide] Calculo Success',
  props<{ response: ICalculo }>()
);

export const calculoError = createAction(
  '[Liquide] Calculo Error',
  props<{ error: IError }>()
);

export const abonoLoading = createAction(
  '[Liquide] Abono Loading',
  props<{ request: IRequestAbono }>()
);

export const abonoSuccess = createAction(
  '[Liquide] Abono Success',
  props<{ data: string }>()
);

export const abonoError = createAction(
  '[Liquide] Abono Error',
  props<{ error: IError }>()
);
