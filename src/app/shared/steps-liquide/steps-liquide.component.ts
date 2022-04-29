import { AppState } from './../../store/app.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-steps-liquide',
  templateUrl: './steps-liquide.component.html',
  styleUrls: ['./steps-liquide.component.scss'],
})
export class StepsLiquideComponent implements OnInit, OnDestroy {
  public currentStep = 1;
  public subscriptions: any[] = [];
  public showInputRate: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('stepsFastLiquide').subscribe((state) => {
        if (state) {
          this.currentStep = state.step;
        }
      })
    );
  }

  onChange(event: any) {
    if (event.target.value === 'OTRA') {
      this.showInputRate = true;
    } else {
      this.showInputRate = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
