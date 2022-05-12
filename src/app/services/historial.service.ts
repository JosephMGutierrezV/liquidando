import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  constructor(private http: HttpClient) {}

  getHistorial(id: string) {
    return this.http
      .get(`${environment.API_URL}/historia/listado/${id}`)
      .pipe(map((resp: any) => resp));
  }
}
