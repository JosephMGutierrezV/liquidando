import { Injectable } from '@angular/core';
import * as fileSaver from 'file-saver';
import { jsPDF } from 'jspdf';
import * as Mustache from 'mustache';
import { IInformationPdfGenerator } from '../interfaces/pdf-generator.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeneratePdfService {
  private readonly template: string = '';
  constructor() {}

  /**
   * Generar Reporte PDF
   * @param {string} template
   * @returns {Promise<void>}
   */
  private static async generatePDF(
    information: IInformationPdfGenerator
  ): Promise<void> {}
}
