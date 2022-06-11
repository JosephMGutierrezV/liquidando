import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducer';
const FileSaver = require('file-saver');

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
    return this.http
      .get(`${environment.API_URL}/historia/listado/impresion/${id}`, {
        responseType: 'blob',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      })
      .toPromise()
      .then((resp: any) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => {
          // dome somenting
        });
        reader.readAsArrayBuffer(resp);
        FileSaver.saveAs(resp, `Listado-${id}.pdf`);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getExcel(id: number) {
    return this.http
      .get(`${environment.API_URL}/reportes/historia/excel/${id}`, {
        responseType: 'blob',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      })
      .toPromise()
      .then((resp: any) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => {
          // dome somenting
        });
        reader.readAsArrayBuffer(resp);
        FileSaver.saveAs(resp, `Listado-${id}.xlsx`);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
