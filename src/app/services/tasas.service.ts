import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasasService {
  private token = '';
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select('auth').subscribe((auth) => {
      this.token = auth.token;
    });
  }

  getListTasas() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return this.http
      .get(`${environment.API_URL}/lista/tasas`, httpOptions)
      .pipe(map((resp: any) => resp));
  }
}
