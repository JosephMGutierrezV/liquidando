import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit, OnDestroy {
  public events: any[] = [];
  public subscriptions: any[] = [];
  public defaultColor = '#ECECEC';
  public selectedColor = '#1e9895';

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('stepsFastLiquide').subscribe((state) => {
        if (state) {
          this.events = this.events.map((event) => {
            event.color = this.defaultColor;
            return event;
          });
          this.events[state.step - 1].color = this.selectedColor;
        }
      })
    );

    this.events = [
      { value: 'Valor', color: this.selectedColor },
      { value: 'Fechas', color: this.defaultColor },
      { value: 'Tasa', color: this.defaultColor },
      { value: 'Liquide', color: this.defaultColor },
      { value: '', color: this.defaultColor }
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
