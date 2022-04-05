import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
const Mustache = require('mustache');
import { IInformationPdfGenerator } from '../interfaces/pdf-generator.interfaces';

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
  public async generatePDF(
    information: IInformationPdfGenerator
  ): Promise<boolean> {
    try {
      const template = await this.getTemplateHTMLReport();
      const renderTemplate = Mustache.render(template!, information);
      document.getElementById('report-liquide')!.innerHTML = renderTemplate;
      const reportTemplate = document.getElementById('report-liquide');
      const doc = new jsPDF('p', 'pt', 'a1');
      const options = { background: 'white', scale: 3 };
      const canvas = await html2canvas(reportTemplate!, options);
      document.getElementById('report-liquide')!.innerHTML = '';
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(
        img,
        'PNG',
        bufferX,
        bufferY,
        pdfWidth,
        pdfHeight,
        undefined,
        'FAST'
      );
      doc.save(`${information.fileName}.pdf`);
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private getTemplateHTMLReport() {
    return this.http
      .get('assets/templates/pdfs/pdfliquidando.html', { responseType: 'text' })
      .toPromise()
      .then((result) => result);
  }
}
