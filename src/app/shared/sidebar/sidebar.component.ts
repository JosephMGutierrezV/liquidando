import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faCalculator,
  faClock,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
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

  public clickExit = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  logout() {
    this.clickExit = true;
    this.store.dispatch(actions.auth.logoutLoading());
  }
}
