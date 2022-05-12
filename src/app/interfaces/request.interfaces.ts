export interface IRequestRegistro {
  password: string;
  repeatPassword: string;
  email: string;
  type: string;
  name: string;
}

export interface IRequestCalculo {
  radicado: string;
  demandante: string;
  demandado: string;
  juzgado: string;
  valor: string;
  fechaInicial: string;
  fechaFinal: string;
  tipoTasa: string;
  id: number;
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
