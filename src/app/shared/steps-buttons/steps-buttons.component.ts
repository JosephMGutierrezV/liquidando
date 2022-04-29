import { AppState } from './../../store/app.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../../store/actions';
@Component({
  selector: 'app-steps-buttons',
  templateUrl: './steps-buttons.component.html',
  styleUrls: ['./steps-buttons.component.scss'],
})
export class StepsButtonsComponent implements OnInit, OnDestroy {
  public currentStep = 1;
  public subscriptions: any[] = [];

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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  nextStep(): void {
    this.store.dispatch(actions.fastLiquide.nextStep());
  }

  previousStep(): void {
    this.store.dispatch(actions.fastLiquide.previousStep());
  }
}
