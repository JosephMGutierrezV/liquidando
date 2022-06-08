import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IRequestForgetPassword,
  IRequestRegistro,
} from '../interfaces/request.interfaces';

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

  register(dataRequest: IRequestRegistro): Observable<any> {
    const request = [];
    request.push(dataRequest.password);
    request.push(dataRequest.repeatPassword);
    request.push(dataRequest.name);
    request.push(dataRequest.email);
    request.push(dataRequest.type.toUpperCase());
    return this.http
      .post(`${environment.API_URL}/usuarios/registro`, { dataUser: request })
      .pipe(map((resp: any) => resp));
  }

  forgetPassword(dataRequest: IRequestForgetPassword) {
    return this.http
      .post(`${environment.API_URL}/recupera`, dataRequest)
      .pipe(map((resp: any) => resp));
  }
}
