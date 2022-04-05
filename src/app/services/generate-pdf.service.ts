import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fileSaver from 'file-saver';
import { jsPDF } from 'jspdf';
import * as Mustache from 'mustache';
import {
  IColumn,
  IInformationPdfGenerator,
} from '../interfaces/pdf-generator.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeneratePdfService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Generar Reporte PDF
   * @param {string} template
   * @returns {Promise<void>}
   */
  public generatePDF(information: IInformationPdfGenerator): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const template = await this.getTemplateHTMLReport();
        const pdf = new jsPDF('l', 'pt');

        const columnAbonosStyles = this.buildColumnStyle(
          information.dataGridAbono.columns
        );

        const headerStyles = {
          fillColor: [238, 238, 238],
          textColor: [0, 0, 0],
          fontSize: 7,
          overflow: 'linebreak',
        };

        resolve(true);
      } catch (error) {
        throw error;
      }
    });
  }

  private getTemplateHTMLReport() {
    return this.http
      .get('assets/templates/pdfs/pdfliquidando.html', { responseType: 'text' })
      .toPromise()
      .then((result) => result);
  }

  /**
   * Estilo para columnas Numericas
   * @param columns
   */
  private buildColumnStyle(columns: IColumn[]) {
    const style: any = {};
    columns.forEach((column: IColumn) => {
      if (column.format === 'numeric') {
        style[column.dataKey] =
          column.format === 'numeric'
            ? { halign: 'right' }
            : { halign: 'left' };
      }
      style[column['dataKey']] =
        column.width !== 0
          ? { columnWidth: column.width }
          : { columnWidth: 100 };
    });
    return style;
  }
}
