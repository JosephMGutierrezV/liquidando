import { createReducer, on } from '@ngrx/store';
import {
  IRequestAbono,
  IRequestCalculo,
} from 'src/app/interfaces/request.interfaces';
import { ICalculo } from 'src/app/interfaces/responses.interfaces';
import { IError } from 'src/app/interfaces/responses.interfaces';
import * as liquide from '../actions/liquide.actions';

export interface StateLiquide {
  loadingCalculo: boolean;
  loadingAbono: boolean;
  requestCalculo: IRequestCalculo;
  responseCalculo: ICalculo;
  responseAbono: string;
  requestAbono: IRequestAbono;
  error: IError;
}

const initialState: StateLiquide = {
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
    id: 0,
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
      id: 0,
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
      id: 0,
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
  }))
);

export function reducerLiquide(state: any, action: any) {
  return _reducerLiquide(state, action);
}
