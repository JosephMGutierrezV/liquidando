import { logoutError } from './../actions/auth.actions';
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

  registrarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerUserLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ dataUser }) =>
        this.authService.register(dataUser)!.pipe(
          map((data) =>
            authActions.registerUserSuccess({ response: data.data })
          ),
          tap((data: any) => {
            if (data) {
              switch (data.response) {
                case 0: {
                  this.store.dispatch(ui.isNotLoading());
                  setTimeout(() => {
                    this.store.dispatch(
                      ui.isSuccess({
                        success: {
                          message:
                            'Usuario registrado correctamente, porfavor inicie sesión',
                          state: true,
                        },
                      })
                    );
                  }, 10);
                  break;
                }

                case 1: {
                  this.store.dispatch(ui.isNotLoading());
                  setTimeout(() => {
                    this.store.dispatch(
                      ui.isError({
                        error: {
                          message: 'El correo ingresado ya esta registrado',
                          code: 'register-error',
                        },
                      })
                    );
                  }, 10);
                  break;
                }

                case 2: {
                  this.store.dispatch(ui.isNotLoading());
                  setTimeout(() => {
                    this.store.dispatch(
                      ui.isError({
                        error: {
                          message: 'Nombre de usuario ya ocupado',
                          code: 'register-error',
                        },
                      })
                    );
                  }, 10);
                  break;
                }

                default: {
                  this.store.dispatch(ui.isNotLoading());
                  setTimeout(() => {
                    this.store.dispatch(
                      ui.isError({
                        error: {
                          message: 'Error al registrar usuario',
                          code: 'register-error',
                        },
                      })
                    );
                  }, 10);
                  break;
                }
              }
            }
          }),
          catchError((error: any) =>
            of(authActions.registerUserError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message: error.error.message || 'Error al registrar',
                        code: error.error.code || 'register-error',
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

  //TODO: Implementar servicio backend para logout
  cerrarSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logoutLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      map(() => authActions.logoutSuccess()),
      tap((data) => {
        if (data) {
          this.router.navigate(['/login']);
          setTimeout(() => {
            this.store.dispatch(ui.isNotLoading());
          }, 1000);
        }
      }),
      catchError((error: any) =>
        of(authActions.logoutError({ error })).pipe(
          tap((error: any) => {
            this.store.dispatch(ui.isNotLoading());
            setTimeout(() => {
              this.store.dispatch(
                ui.isError({
                  error: {
                    message: error.error.message || 'Error al cerrar sesión',
                    code: error.error.code || 'logout-error',
                  },
                })
              );
            }, 10);
          })
        )
      )
    )
  );

  forgetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.forgetPasswordLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ dataUser }) =>
        this.authService.forgetPassword(dataUser)!.pipe(
          map((data) =>
            authActions.forgetPasswordSuccess({ response: data.data })
          ),
          tap((data: any) => {
            if (data['error']) {
              this.store.dispatch(ui.isNotLoading());
              setTimeout(() => {
                this.store.dispatch(
                  ui.isError({
                    error: {
                      message: data.error || 'Error al enviar correo',
                      code: data.error.code || 'forget-password-error',
                    },
                  })
                );
              }, 10);
            } else {
              setTimeout(() => {
                this.store.dispatch(ui.isNotLoading());
              }, 1000);
            }
          }),
          catchError((error: any) =>
            of(authActions.forgetPasswordError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al enviar correo',
                        code: error.error.code || 'forget-password-error',
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
