import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ICalculoFinalizar,
  IRequestAbono,
  IRequestCalculo,
} from '../interfaces/request.interfaces';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class LiquideService {
  private token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select('auth').subscribe((auth) => {
      this.token = auth.token;
    });
  }
  calculo(requestData: IRequestCalculo) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    const request = this.buildRequestCalculo(requestData);
    return this.http
      .post(`${environment.API_URL}/amortizacion/calculo`, request, httpOptions)
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
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    const request = [requestData.radicado, requestData.abonos, requestData.id];
    return this.http
      .post(`${environment.API_URL}/amortizacion/abonos`, request, httpOptions)
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
