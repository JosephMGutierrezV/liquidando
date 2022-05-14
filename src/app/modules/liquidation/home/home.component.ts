import { AppState } from './../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as actions from './../../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public showResume = false;

  public subscritions: any[] = [];

  public dataTasas: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(actions.tasas.tasaLoading());
    this.subscritions.push(
      this.store.select('tasa').subscribe((state: any) => {
        if (state.loading) {
          this.dataTasas = state.response.data[0];
        } else {
          this.dataTasas = [];
        }
      })
    );
    this.subscritions.push(
      this.store.select('liquide').subscribe((state: any) => {
        if (state.loadingCalculo) {
          this.showResume = true;
        } else {
          this.showResume = false;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.showResume = false;
  }

  ngOnDestroy(): void {
    this.subscritions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
