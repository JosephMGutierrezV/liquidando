import { AppState } from './../../store/app.reducer';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-steps-liquide',
  templateUrl: './steps-liquide.component.html',
  styleUrls: ['./steps-liquide.component.scss'],
})
export class StepsLiquideComponent implements OnInit, OnDestroy, AfterViewInit {
  public currentStep: number = 1;
  public subscriptions: any[] = [];
  public showInputRate: boolean = false;

  public capitalInicialForm!: FormGroup;
  public fechasForm!: FormGroup;
  public tasasForm!: FormGroup;
  public confirmForm!: FormGroup;

  public dateBegin: Date = new Date();
  public dateEnd: Date = new Date();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForms();

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

  nextStep(): void {
    switch (this.currentStep) {
      case 1: {
        if (this.capitalInicialForm.valid) {
          this.confirmForm.patchValue({
            monto: this.capitalInicialForm.value.valorCapitalInicial,
          });
          this.store.dispatch(actions.fastLiquide.nextStep());
        } else {
          this.store.dispatch(
            actions.ui.isError({
              error: {
                message: 'El valor del capital inicial es requerido',
                code: 'VALOR_CAPITAL_REQUERIDO',
              },
            })
          );
        }
        break;
      }
      case 2: {
        this.store.dispatch(actions.fastLiquide.nextStep());
        break;
      }

      case 3: {
        this.store.dispatch(actions.fastLiquide.nextStep());
        break;
      }

      case 4: {
        this.store.dispatch(actions.fastLiquide.nextStep());
        break;
      }

      default: {
        break;
      }
    }
  }

  initForms() {
    this.capitalInicialForm = new FormGroup({
      valorCapitalInicial: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
    this.fechasForm = new FormGroup({
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFinal: new FormControl('', [Validators.required]),
    });
    this.tasasForm = new FormGroup({
      tasa: new FormControl('', [Validators.required]),
      tasaOtra: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
    this.confirmForm = new FormGroup({
      monto: new FormControl('', [Validators.required]),
      fechaInicialConfirm: new FormControl('', [Validators.required]),
      fechaFinalConfirm: new FormControl('', [Validators.required]),
      tasaConfirm: new FormControl('', [Validators.required]),
      tasaOtraConfirm: new FormControl('', [Validators.required]),
    });
  }

  setDateBegin(event: any) {
    this.dateBegin = event;
  }

  setDataEnd(event: any) {
    this.dateEnd = event;
  }

  previousStep(): void {
    this.store.dispatch(actions.fastLiquide.previousStep());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
