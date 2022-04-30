import { AppState } from './../../store/app.reducer';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
@Component({
  selector: 'app-steps-liquide',
  templateUrl: './steps-liquide.component.html',
  styleUrls: ['./steps-liquide.component.scss'],
})
export class StepsLiquideComponent implements OnInit, OnDestroy, AfterViewInit {
  public currentStep: number = 1;
  public subscriptions: any[] = [];
  public showInputRate: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('stepsFastLiquide').subscribe((state) => {
        if (state) {
          this.currentStep = state.step;
        }
      })
    );
  }

  ngAfterViewInit() {
    this.currentStep = 1;
    this.store.dispatch(actions.fastLiquide.resetSteps());
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
