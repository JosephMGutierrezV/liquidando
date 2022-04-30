import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public subscriptions: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('ui').subscribe((ui) => {
        if (ui.isLoading) {
          Swal.fire({
            title: 'Espere por favor...',
            didOpen: () => {
              Swal.showLoading();
            },
            allowOutsideClick: false,
            color: '#1e9895',
          });
        } else {
          Swal.close();
        }
        if (ui.error.message) {
          Swal.fire({
            text: ui.error.message,
            icon: 'error',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#1e9895',
          });
        }
        if (ui.success.state) {
          Swal.fire({
            text: ui.success.message,
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#1e9895',
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
