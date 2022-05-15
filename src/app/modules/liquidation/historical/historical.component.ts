import { AppState } from './../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import jwt_decode from 'jwt-decode';
import * as actions from './../../../store/actions';
import * as moment from 'moment';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
})
export class HistoricalComponent implements OnInit, OnDestroy {
  public subscriptions: any[] = [];
  public dataHistorial: any[] = [];
  private token: string = '';
  public isLoader: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initSubsAuth();
    this.dispatchHistorial();
    this.initSubsHistorial();
  }

  private initSubsAuth() {
    this.subscriptions.push(
      this.store.select('auth').subscribe((state: any) => {
        this.token = state.token;
      })
    );
  }

  private dispatchHistorial() {
    const decoded: any = jwt_decode(this.token);
    this.store.dispatch(
      actions.historial.historialLoading({ id: decoded.identity.id })
    );
  }

  private initSubsHistorial() {
    this.subscriptions.push(
      this.store.select('historial').subscribe((data) => {
        this.isLoader = data.loading;
        if (data.loading) {
          this.dataHistorial = this.clearHistorialData(data.response.data);
        }
      })
    );
  }

  private clearHistorialData(data: any) {
    let id = 0;
    const historial = data.map((item: any) => {
      id++;
      return {
        id: id,
        ...item,
        fecha: moment(item.fecha).format('YYYY-MM-DD'),
      };
    });
    return [...historial];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
