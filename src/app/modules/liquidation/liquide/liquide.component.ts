import { AppState } from './../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import * as actions from './../../../store/actions';
import { ITableBasic } from 'src/app/interfaces/tables.interface';
import { IRequestAbono } from 'src/app/interfaces/request.interfaces';
@Component({
  selector: 'app-liquide',
  templateUrl: './liquide.component.html',
  styleUrls: ['./liquide.component.scss'],
})
export class LiquideComponent implements OnInit, OnDestroy {
  public showInputOtherRate = false;
  public showResume = false;

  public subscriptions: any[] = [];

  public mainForm!: FormGroup;
  public capitalizacionClienteForm!: FormGroup;
  public abonosForm!: FormGroup;

  public radioButtonSelected: string = '';

  public mainDateBegin: string = moment(new Date()).format('YYYY-MM-DD');
  public mainDateEnd: string = moment(new Date()).format('YYYY-MM-DD');
  public abonosDate: string = moment(new Date()).format('YYYY-MM-DD');
  public capitalDate: string = moment(new Date()).format('YYYY-MM-DD');

  public dataAbonos: ITableBasic[] = [];
  public dataCapitalizacionCliente: ITableBasic[] = [];
  public idAbonos = 0;
  public idCapitalizacionCliente = 0;

  public dataResumeAbonos = [];
  public dataResumeProceso = [];

  public totalInteresesMensualesResumen = 0;
  public granTotalResumen = 0;
  public totalInteresesDias = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForms();
    this.subscriptions.push(
      this.store.select('liquide').subscribe((data: any) => {
        if (
          this.dataAbonos.length !== 0 ||
          this.dataCapitalizacionCliente.length !== 0
        ) {
          if (data.loadingAbono && data.loadingCalculo) {
            this.showResume = true;
          } else {
            this.showResume = false;
          }
        } else {
          if (data.loadingCalculo) {
            this.showResume = true;
          } else {
            this.showResume = false;
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: any) =>
      subscription.unsubscribe()
    );
  }

  initForms() {
    this.mainForm = new FormGroup({
      radicado: new FormControl('', [Validators.required]),
      juzgado: new FormControl('', [Validators.required]),
      demandante: new FormControl('', [Validators.required]),
      demandado: new FormControl('', [Validators.required]),
      capital: new FormControl('', [Validators.required]),
      nuevaTasa: new FormControl('', []),
    });

    this.capitalizacionClienteForm = new FormGroup({
      capitalizacionCliente: new FormControl('', [Validators.required]),
    });

    this.abonosForm = new FormGroup({
      abonos: new FormControl('', [Validators.required]),
    });
  }

  setDateBegin(event: any) {
    this.mainDateBegin = event;
  }

  setDateEnd(event: any) {
    this.mainDateEnd = event;
  }

  setDateAbonos(event: any) {
    this.abonosDate = event;
  }

  setDateCapitalizacionCliente(event: any) {
    this.capitalDate = event;
  }

  onItemChange(event: any) {
    this.radioButtonSelected = event.target.value;
    if (event.target.value === 'OTRA') {
      this.showInputOtherRate = true;
    } else {
      this.showInputOtherRate = false;
    }
  }

  agregarCapitalizacionCliente() {
    if (!this.capitalizacionClienteForm.valid) {
      this.store.dispatch(
        actions.ui.isError({
          error: {
            message: 'Todos los campos son requeridos',
            code: 'error_form_invalid',
          },
        })
      );
    } else {
      this.idCapitalizacionCliente++;
      this.dataCapitalizacionCliente.push({
        id: this.idCapitalizacionCliente,
        fecha: this.capitalDate,
        monto: this.capitalizacionClienteForm.value.capitalizacionCliente,
      });
    }
  }

  agregarAbonos() {
    if (!this.abonosForm.valid) {
      this.store.dispatch(
        actions.ui.isError({
          error: {
            message: 'Todos los campos son requeridos',
            code: 'error_form_invalid',
          },
        })
      );
    } else {
      this.idAbonos++;
      this.dataAbonos.push({
        id: this.idAbonos,
        fecha: this.abonosDate,
        monto: this.abonosForm.value.abonos,
      });
    }
  }

  calcular() {
    if (!this.mainForm.valid) {
      this.store.dispatch(
        actions.ui.isError({
          error: {
            message: 'Todos los campos son requeridos',
            code: 'error_form_invalid',
          },
        })
      );
    } else {
      this.store.dispatch(actions.ui.isLoading());

      const values = this.mainForm.value;

      const requestCalculo = {
        radicado: values.radicado.toString(),
        demandante: values.demandante,
        demandado: values.demandado,
        juzgado: values.juzgado,
        valor: values.capital.toString(),
        fechaInicial: this.mainDateBegin,
        fechaFinal: this.mainDateEnd,
        tipoTasa: this.radioButtonSelected,
        id: 0,
      };

      if (this.dataAbonos.length !== 0) {
        const requestAbonos: IRequestAbono = {
          id: '0',
          radicado: values.radicado.toString(),
          abonos: this.clearArray(this.dataAbonos),
        };

        this.store.dispatch(
          actions.liquide.abonoLoading({ request: requestAbonos })
        );
      }

      if (this.dataCapitalizacionCliente.length !== 0) {
        const requestCapitalizaciones = {
          id: '1',
          radicado: values.radicado.toString(),
          abonos: this.clearArray(this.dataCapitalizacionCliente),
        };

        this.store.dispatch(
          actions.liquide.abonoLoading({ request: requestCapitalizaciones })
        );
      }

      setTimeout(() => {
        this.store.dispatch(
          actions.liquide.calculoLoading({ request: requestCalculo })
        );
      }, 2000);
    }
  }

  private clearArray(data: any[]): any[] {
    const newData = data.map((element: any) => {
      delete element.id;
      element.monto = element.monto.toString();
      return element;
    });
    return newData;
  }

  deleteItemCapitalizacionCliente(capital: any) {
    this.dataCapitalizacionCliente = this.dataCapitalizacionCliente.filter(
      (val) => val.id !== capital.id
    );
  }

  deleteItemAbonos(abono: any) {
    this.dataAbonos = this.dataAbonos.filter((val) => val.id !== abono.id);
  }
}
