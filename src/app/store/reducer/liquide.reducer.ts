import { createReducer, on } from '@ngrx/store';
import {
  IRequestAbono,
  IRequestCalculo,
} from 'src/app/interfaces/request.interfaces';
import { ICalculo } from 'src/app/interfaces/responses.interfaces';
import { IError } from 'src/app/interfaces/responses.interfaces';
import * as liquide from '../actions/liquide.actions';

export interface StateLiquide {
  loaded: boolean;
  requestCalculo: IRequestCalculo;
  responseCalculo: ICalculo;
  responseAbono: string;
  requestAbono: IRequestAbono;
  error: IError;
}

const initialState: StateLiquide = {
  loaded: false,
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
    loaded: false,
    requestCalculo: request,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.calculoSuccess, (state, { response }) => ({
    ...state,
    loaded: true,
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
    loaded: true,
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
    loaded: false,
    requestAbono: request,
    error: {
      message: '',
      code: '',
    },
  })),
  on(liquide.abonoSuccess, (state, { data }) => ({
    ...state,
    loaded: true,
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
    loaded: true,
    requestAbono: {
      radicado: '',
      abonos: [],
      id: '',
    },
    responseAbono: '',
    error: error,
  }))
);
