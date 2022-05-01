import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { faBars, faBell, faUserLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public faBars = faBars;
  public faBell = faBell;
  public faUserLock = faUserLock;
  public nameUser = '';
  public subscriptions: any[] = [];

  @Output() toggleMenu = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('auth').subscribe((auth) => {
        this.nameUser = auth.user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  toggle() {
    this.toggleMenu.emit();
  }
}
