import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  private token = '';
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select('auth').subscribe((auth) => {
      this.token = auth.token;
    });
  }

  getHistorial(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get(`${environment.API_URL}/historia/listado/${id}`, httpOptions)
      .pipe(map((resp: any) => resp));
  }
}
