import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as ui from '../actions/ui.actions';
import * as liquide from '../actions/liquide.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LiquideService } from 'src/app/services/liquide.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { of } from 'rxjs';

@Injectable()
export class LiquideEffects {
  constructor(
    private actions$: Actions,
    private LiquideService: LiquideService,
    private store: Store<AppState>
  ) {}

  cargarCalculo = createEffect(() =>
    this.actions$.pipe(
      ofType(liquide.calculoLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ request }) =>
        this.LiquideService.calculo(request)!.pipe(
          map((data) => liquide.calculoSuccess({ response: data })),
          tap((data: any) => {
            if (data) {
              setTimeout(() => {
                this.store.dispatch(ui.isNotLoading());
              }, 200);
            }
          }),
          catchError((error: any) =>
            of(liquide.calculoError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al realizar el calculo',
                        code: error.error.code || 'calculo-error',
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

  cargarAbono = createEffect(() =>
    this.actions$.pipe(
      ofType(liquide.abonoLoading),
      mergeMap(({ request }) =>
        this.LiquideService.abonos(request)!.pipe(
          map((data) => liquide.abonoSuccess({ data: data })),
          catchError((error: any) =>
            of(liquide.abonoError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al cargar abonos',
                        code: error.error.code || 'abono-error',
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

  cargarCalculoFinalizar = createEffect(() =>
    this.actions$.pipe(
      ofType(liquide.calculoFinalizarLoading),
      tap(() => {
        this.store.dispatch(ui.isLoading());
      }),
      mergeMap(({ request }) =>
        this.LiquideService.calculoFinalizar(request)!.pipe(
          map((data) => liquide.calculoFinalizarSuccess({ data: data })),
          tap((data: any) => {
            if (data) {
              setTimeout(() => {
                this.store.dispatch(ui.isNotLoading());
              }, 200);
            }
          }),
          catchError((error: any) =>
            of(liquide.calculoFinalizarError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message ||
                          'Error al finalizar el calculo',
                        code: error.error.code || 'calculo-finalizar-error',
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

  calculoFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(liquide.calculoFileLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ file }) =>
        this.LiquideService.calculoFile(file)!.pipe(
          map((data) => liquide.calculoFileSuccess({ data: data })),
          tap((data: any) => {
            if (data) {
              if (data['data']['data'] === 'Exito') {
                this.store.dispatch(
                  ui.isSuccess({
                    success: {
                      message: 'El calculo se ha realizado correctamente',
                      state: true,
                    },
                  })
                );
              } else {
                this.store.dispatch(
                  ui.isError({
                    error: {
                      message:
                        'Lo Sentimos Creditos insuficientes, contrata de nuevo!, Gracias',
                      code: 'calculo-error',
                    },
                  })
                );
              }
            }
          }),
          catchError((error: any) =>
            of(liquide.calculoFileError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al cargar archivo',
                        code: error.error.code || 'calculo-file-error',
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
