import { AppState } from './../app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as authActions from '../actions/auth.actions';
import * as ui from '../actions/ui.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  cargarLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ psw, user }) =>
        this.authService.login(user, psw)!.pipe(
          map((data) => authActions.loginSuccess({ token: data.data })),
          tap((data: any) => {
            if (data) {
              if (!data.token) {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message: 'Usuario o contraseña incorrectos',
                        code: 'login-error',
                      },
                    })
                  );
                }, 10);
              } else {
                this.router.navigate(['/dashboard/home']);
                setTimeout(() => {
                  this.store.dispatch(ui.isNotLoading());
                }, 1000);
              }
            }
          }),
          catchError((error: any) =>
            of(authActions.loginError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message: error.error.message || 'Error al autenticar',
                        code: error.error.code || 'login-error',
                      },
                    })
                  );
                }, 10);
              })
            )
          )
        )
      )
    )
  );
}
