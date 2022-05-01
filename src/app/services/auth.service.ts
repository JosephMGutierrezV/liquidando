import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: string, psw: string) {
    return this.http
      .post(`${environment.API_URL}/login`, {
        user,
        psw,
      })
      .pipe(map((resp: any) => resp));
  }
}
