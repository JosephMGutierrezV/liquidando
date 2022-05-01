import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class LeaveLoginGuard implements CanActivate {
  constructor(private store: Store<AppState>, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
