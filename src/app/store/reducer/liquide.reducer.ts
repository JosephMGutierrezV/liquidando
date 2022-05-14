import { createReducer, on } from '@ngrx/store';
import {
  IRequestAbono,
  IRequestCalculo,
  IRequestCalculoFinal,
} from 'src/app/interfaces/request.interfaces';
import { ICalculo } from 'src/app/interfaces/responses.interfaces';
import { IError } from 'src/app/interfaces/responses.interfaces';
import * as liquide from '../actions/liquide.actions';

export interface StateLiquide {
  loadingCalculo: boolean;
  loadingAbono: boolean;
  loadingCalculoFinal: boolean;
  requestCalculo: IRequestCalculo;
  responseCalculo: ICalculo;
  responseAbono: string;
  requestAbono: IRequestAbono;
  error: IError;
  requestCalculoFinal?: IRequestCalculoFinal;
  responseCalculoFinal?: string;
}

const initialState: StateLiquide = {
  loadingCalculo: false,
  loadingAbono: false,
  loadingCalculoFinal: false,
  requestCalculo: {
    radicado: '',
    demandante: '',
    demandado: '',
    juzgado: '',
    valor: '',
    fechaInicial: '',
    fechaFinal: '',
    tipoTasa: '',
    id: -1,
  },
  responseCalculo: {
    complemento: [],
    data: [],
    listaAC: [],
    totales: [],
  },
  responseAbono: '',
  requestAbono: {
    radicado: '',
    abonos: [],
    id: '',
  },
  error: {
    message: '',
    code: '',
  },
};

const _reducerLiquide = createReducer(
  initialState,
  on(liquide.calculoLoading, (state, { request }) => ({
    ...state,
    loadingCalculo: false,
    requestCalculo: request,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.calculoSuccess, (state, { response }) => ({
    ...state,
    loadingCalculo: true,
    requestCalculo: {
      radicado: '',
      demandante: '',
      demandado: '',
      juzgado: '',
      valor: '',
      fechaInicial: '',
      fechaFinal: '',
      tipoTasa: '',
      id: -1,
    },
    responseCalculo: response,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.calculoError, (state, { error }) => ({
    ...state,
    loadingCalculo: false,
    loadingAbono: false,
    requestCalculo: {
      radicado: '',
      demandante: '',
      demandado: '',
      juzgado: '',
      valor: '',
      fechaInicial: '',
      fechaFinal: '',
      tipoTasa: '',
      id: -1,
    },
    responseCalculo: { complemento: [], data: [], listaAC: [], totales: [] },
    error: error,
  })),
  on(liquide.abonoLoading, (state, { request }) => ({
    ...state,
    loadingAbono: false,
    requestAbono: request,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.abonoSuccess, (state, { data }) => ({
    ...state,
    loadingAbono: true,
    requestAbono: {
      radicado: '',
      abonos: [],
      id: '',
    },
    responseAbono: data,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.abonoError, (state, { error }) => ({
    ...state,
    loadingCalculo: false,
    loadingAbono: false,
    requestAbono: {
      radicado: '',
      abonos: [],
      id: '',
    },
    responseAbono: '',
    error: error,
  })),
  on(liquide.calculoFinalizarLoading, (state, { request }) => ({
    ...state,
    requestCalculoFinal: request,
    error: {
      message: '',
      code: '',
    },
    loadingCalculoFinal: false,
  })),
  on(liquide.calculoFinalizarSuccess, (state, { data }) => ({
    ...state,
    error: {
      message: '',
      code: '',
    },
    loadingCalculoFinal: true,
    responseCalculoFinal: data,
  })),
  on(liquide.calculoFinalizarError, (state, { error }) => ({
    ...state,
    error: error,
    loadingCalculoFinal: false,
  }))
);

export function reducerLiquide(state: any, action: any) {
  return _reducerLiquide(state, action);
}
