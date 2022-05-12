import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IRequestAbono,
  IRequestCalculo,
} from '../interfaces/request.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LiquideService {
  constructor(private http: HttpClient) {}

  calculo(requestData: IRequestCalculo) {
    const request = [];
    const arrayUno = [
      requestData.radicado,
      requestData.demandante,
      requestData.demandado,
      requestData.juzgado,
      requestData.valor,
      requestData.fechaInicial,
      requestData.fechaFinal,
      requestData.tipoTasa,
    ];
    const arrayDos = [requestData.id];
    request.push(arrayUno);
    request.push(arrayDos);
    return this.http
      .post(`${environment.API_URL}/amortizacion/calculo`, request)
      .pipe(map((resp: any) => resp));
  }

  abonos(requestData: IRequestAbono) {
    const request = [requestData.radicado, requestData.abonos, requestData.id];
    return this.http
      .post(`${environment.API_URL}/amortizacion/abonos`, request)
      .pipe(map((resp: any) => resp));
  }
}
