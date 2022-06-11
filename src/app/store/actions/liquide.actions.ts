import {
  IRequestAbono,
  IRequestCalculoFinal,
} from './../../interfaces/request.interfaces';
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

export const calculoFinalizarLoading = createAction(
  '[Liquide] Calculo Finalizar Loading',
  props<{ request: IRequestCalculoFinal }>()
);

export const calculoFinalizarSuccess = createAction(
  '[Liquide] Calculo Finalizar Success',
  props<{ data: string }>()
);

export const calculoFinalizarError = createAction(
  '[Liquide] Calculo Finalizar Error',
  props<{ error: IError }>()
);

export const calculoFileLoading = createAction(
  '[Liquide] Calculo File Loading',
  props<{ file: any }>()
);

export const calculoFileSuccess = createAction(
  '[Liquide] Calculo File Success',
  props<{ data: string }>()
);

export const calculoFileError = createAction(
  '[Liquide] Calculo File Error',
  props<{ error: IError }>()
);
