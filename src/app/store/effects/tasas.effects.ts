import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TasasService } from 'src/app/services/tasas.service';
import { AppState } from '../app.reducer';
import * as tasasActions from '../actions/tasas.actions';
import * as ui from '../actions/ui.actions';
import { of } from 'rxjs';

@Injectable()
export class TasasEffects {
  constructor(
    private actions$: Actions,
    private tasasService: TasasService,
    private store: Store<AppState>
  ) {}

  cargarTasas = createEffect(() =>
    this.actions$.pipe(
      ofType(tasasActions.tasaLoading),
      mergeMap(() =>
        this.tasasService.getListTasas().pipe(
          map((data) => tasasActions.tasaSuccess({ response: data })),
          catchError((error: any) =>
            of(tasasActions.tasaError({ error })).pipe(
              tap((error: any) => {
                this.store.dispatch(ui.isNotLoading());
                setTimeout(() => {
                  this.store.dispatch(
                    ui.isError({
                      error: {
                        message:
                          error.error.message || 'Error al cargar las tasas',
                        code: error.error.code || 'tasas-error',
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
