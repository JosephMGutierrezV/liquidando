export interface ISuccess {
  message: string;
  state: boolean;
}
export interface IError {
  message: string;
  code: string;
}

export interface IRegistro {
  dataUser: string[];
}

export interface ICalculo {
  complemento: any[];
  data: IDataCalculo[];
  listaAC: any[];
  totales: string[];
}

export interface IDataCalculo {
  capital: string;
  fecha: string;
  interes: string;
  tasa: string;
  total: string;
}

export interface IAbono {
  data: string;
}

export interface IHistorial {
  caso: string;
  demandado: string;
  demandante: string;
  fecha: string;
}
