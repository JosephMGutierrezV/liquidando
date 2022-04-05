export interface IInformationPdfGenerator {
  dataGridIntereses: IDataGrid;
  dataGridAbono: IDataGrid;
  dataForm: IDataFrom;
}

export interface IDataGrid {
  columns: IColumn[];
  rows: any[];
}

export interface IDataFrom {
  demandante: string;
  demandado: string;
  radicado: string;
  juzgado: string;
  totalInteres: string;
  capital: string;
  granTotal: string;
  fechaInicial: string;
  fechaFinal: string;
}

export interface IColumn {
  format: string;
  dataKey: string;
  width: number;
}
