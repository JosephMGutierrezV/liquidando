export interface IInformationPdfGenerator {
  fileName: string;
  value: IDataFrom;
  text: ITextReprot;
  dataGridAbono: Array<IDataGridAbono>;
  dataGridIntereses: Array<IDataGridIntereses>;
}

export interface IDataGridIntereses {
  date: string;
  tasa: string;
  intereses: string;
  capital: string;
  total: string;
}

export interface IDataGridAbono {
  date: string;
  abono: string;
  capitalizacion: string;
}
export interface ITextReprot {
  demandante: string;
  demandado: string;
  radicado: string;
  juzgado: string;
  interesesTotal: string;
  capital: string;
  totalGran: string;
  initialDate: string;
  finalDate: string;
  titleAbonos: string;
  tasaInteres: string;
  date: string;
  abono: string;
  capitalizacion: string;
  titleInteres: string;
  tasa: string;
  intereses: string;
  total: string;
}
export interface IDataFrom {
  demandante: string;
  demandado: string;
  radicado: string;
  juzgado: string;
  intereses: string;
  capital: string;
  total: string;
  initialDate: string;
  finalDate: string;
  tasaInteres: string;
}
