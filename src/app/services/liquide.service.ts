import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ICalculoFinalizar,
  IRequestAbono,
  IRequestCalculo,
} from '../interfaces/request.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LiquideService {
  constructor(private http: HttpClient) {}

  calculo(requestData: IRequestCalculo) {
    const request = this.buildRequestCalculo(requestData);
    return this.http
      .post(`${environment.API_URL}/amortizacion/calculo`, request)
      .pipe(map((resp: any) => resp));
  }

  calculoFinalizar(requestData: ICalculoFinalizar) {
    const request = [
      requestData.dataLiquidacion,
      requestData.data,
      requestData.dataMonto,
      requestData.dataRequestCalculo,
    ];
    return this.http
      .put(`${environment.API_URL}/amortizacion/calculo`, request)
      .pipe(map((resp: any) => resp));
  }

  abonos(requestData: IRequestAbono) {
    const request = [requestData.radicado, requestData.abonos, requestData.id];
    return this.http
      .post(`${environment.API_URL}/amortizacion/abonos`, request)
      .pipe(map((resp: any) => resp));
  }

  private buildRequestCalculo(requestData: IRequestCalculo) {
    let array = [];
    if (requestData.id === 1) {
      array = [
        '',
        requestData.valor,
        requestData.fechaInicial,
        requestData.fechaFinal,
        requestData.tipoTasa,
        '',
      ];
    } else {
      array = [
        requestData.radicado,
        requestData.demandante,
        requestData.demandado,
        requestData.juzgado,
        requestData.valor,
        requestData.fechaInicial,
        requestData.fechaFinal,
        requestData.tipoTasa,
      ];
    }
    return [array, requestData.id];
  }
}
