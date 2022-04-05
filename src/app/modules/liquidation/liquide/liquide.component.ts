import { Component, OnInit } from '@angular/core';
import { GeneratePdfService } from '../../../services/generate-pdf.service';

@Component({
  selector: 'app-liquide',
  templateUrl: './liquide.component.html',
  styleUrls: ['./liquide.component.scss'],
})
export class LiquideComponent implements OnInit {
  constructor(private generatePdfService: GeneratePdfService) {}

  ngOnInit(): void {}

  downloadPdf() {
    const data = {
      fileName: 'liquidacion',
      text: {
        demandante: 'DEMANDANTE',
        demandado: 'DEMANDADO',
        radicado: 'RADICADO',
        juzgado: 'JUZGADO',
        interesesTotal: 'INTERESES TOTAL',
        capital: 'CAPITAL',
        totalGran: 'TOTAL GRAN TOTAL',
        initialDate: 'FECHA INICIAL',
        finalDate: 'FECHA FINAL',
        titleAbonos: 'ABONOS',
        tasaInteres: 'TASA DE INTERES',
        date: 'FECHA',
        abono: 'ABONO',
        capitalizacion: 'CAPITALIZACION',
        titleInteres: 'INTERESES',
        tasa: 'TASA',
        intereses: 'INTERESES',
        total: 'TOTAL',
      },
      value: {
        demandante: 'DEMANDANTE',
        demandado: 'DEMANDADO',
        radicado: 'RADICADO',
        juzgado: 'JUZGADO',
        intereses: 'INTERESES',
        capital: 'CAPITAL',
        total: 'TOTAL',
        initialDate: 'FECHA INICIAL',
        finalDate: 'FECHA FINAL',
        tasaInteres: 'TASA DE INTERES',
      },
      dataGridAbono: [
        {
          date: '01/01/2020',
          abono: '$100',
          capitalizacion: '$100',
        },
      ],
      dataGridIntereses: [
        {
          date: '01/01/2020',
          tasa: '1.5',
          intereses: '$100',
          capital: '$100',
          total: '$100',
        },
      ],
    };
    this.generatePdfService.generatePDF(data);
  }
}
