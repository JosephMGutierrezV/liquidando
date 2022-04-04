export interface IInformationPdfGenerator {
  dataGridIntereses: IDataGrid;
  dataGridAbono: IDataGrid;
  dataForm: IDataFrom;
}

interface IDataGrid {
  columns: string[];
  rows: any[];
}

interface IDataFrom {
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
