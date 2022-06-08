export interface IRequestRegistro {
  password: string;
  repeatPassword: string;
  email: string;
  type: string;
  name: string;
}

export interface IRequestCalculo {
  radicado?: string;
  demandante?: string;
  demandado?: string;
  juzgado?: string;
  valor: string;
  fechaInicial: string;
  fechaFinal: string;
  tipoTasa: string;
  id: number;
}

export interface IRequestCalculoFinal {
  dataProceso: any;
  dataTotales: any;
  dataRequest: any;
  data: any;
}

export interface IRequestAbono {
  radicado: string;
  abonos: IAbonoData[];
  id: string;
}

export interface IAbonoData {
  fecha: string;
  monto: string;
}

export interface IRequestForgetPassword {
  email: string;
  psw: string;
}
