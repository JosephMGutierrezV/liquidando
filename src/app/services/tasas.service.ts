import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasasService {
  constructor(private http: HttpClient) {}

  getListTasas() {
    return this.http
      .get(`${environment.API_URL}/lista/tasas`)
      .pipe(map((resp: any) => resp));
  }
}
