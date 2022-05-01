import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public showMenu = true;

  private userToken = '';

  public subscriptions: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe((resp) => {
      this.userToken = resp.token;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  toggle() {
    this.showMenu = !this.showMenu;
  }

  CanComponentDeactivate(): Observable<boolean> | boolean {
    if (this.userToken) {
      return false;
    }
    return true;
  }
}
