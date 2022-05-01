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
      tap(() => this.store.dispatch(ui.isLoading())),
      mergeMap(({ psw, user }) =>
        this.authService.login(user, psw)!.pipe(
          map((data) => authActions.loginSuccess({ token: data })),
          tap(() => {
            ui.isLoading();
            this.router.navigate(['/dashboard/home']);
          }),
          catchError((error: any) => of(authActions.loginError({ error }))),
          tap((error) => console.log(error)),
          tap((error: any) => this.store.dispatch(ui.isError({ error })))
        )
      )
    )
  );
}
