import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../store/app.reducer';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private store: Store<AppState>, private route: Router) {}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select((state) => state.auth.token),
      map((resp) => {
        if (resp === '') {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
