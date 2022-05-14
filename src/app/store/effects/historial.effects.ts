import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HistorialService } from 'src/app/services/historial.service';
import { AppState } from '../app.reducer';
import * as historialActions from '../actions/historial.actions';
import * as ui from '../actions/ui.actions';
import { of } from 'rxjs';

@Injectable()
export class HistorialEffects {
  constructor(
    private actions$: Actions,
    private historialService: HistorialService,
    private store: Store<AppState>
  ) {}

  cargarHistorial = createEffect(() =>
    this.actions$.pipe(
      ofType(historialActions.historialLoading),
      tap(() => {
        this.store.dispatch(ui.isNotLoading());
        setTimeout(() => {
          this.store.dispatch(ui.isLoading());
        }, 10);
      }),
      mergeMap(({ id }) =>
        this.historialService.getHistorial(id)!.pipe(
          map((data) => historialActions.historialSuccess({ response: data })),
          tap((data) => {
            setTimeout(() => {
              this.store.dispatch(ui.isNotLoading());
            }, 500);
          }),
          catchError((error: any) =>
            of(historialActions.historialError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al cargar el historial',
                        code: error.error.code || 'historial-error',
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
