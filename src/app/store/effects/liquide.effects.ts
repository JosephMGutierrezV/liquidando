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
              this.store.dispatch(ui.isNotLoading());
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
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
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
}
