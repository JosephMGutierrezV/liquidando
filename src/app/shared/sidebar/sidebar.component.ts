import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faCalculator,
  faClock,
  faArrowAltCircleRight,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public faHome = faHome;
  public faCalculator = faCalculator;
  public faClock = faClock;
  public faArrowAltCircleRight = faArrowAltCircleRight;
  public faUserShield = faUserShield;
  public clickExit = false;
  public isAdmin = false;
  public subscriptions: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('auth').subscribe(({ token }) => {
        const decoded: any = jwtDecode(token);
        const rol = decoded.identity.privilegios;
        if (rol == '1.1.1.1.1') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      })
    );
  }

  logout() {
    this.clickExit = true;
    this.store.dispatch(actions.auth.logoutLoading());
  }
}
