import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducer';


@Injectable({
  providedIn: 'root',
})
export class AttachmentsFilesService {
  private token = '';
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select('auth').subscribe((auth) => {
      this.token = auth.token;
    });
  }

  getPdf(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get(
        `${environment.API_URL}/historia/listado/impresion/${id}`,
        httpOptions,
      )
      .toPromise()
      .then((resp: any) => {
        const blob = new Blob([resp.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `Listado-${id}.pdf`;
        link.click();
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getExcel(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get(`${environment.API_URL}/reportes/historia/excel/${id}`, httpOptions)
      .toPromise()
      .then((resp: any) => {
        const blob = new Blob([resp.data], {
          type: 'application/vnd.ms-excel',
        });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `Historial-${id}.xlsx`;
        link.click();
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
