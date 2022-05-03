import { AppState } from './../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import * as actions from './../../../store/actions';
import { ITableBasic } from 'src/app/interfaces/tables.interface';
@Component({
  selector: 'app-liquide',
  templateUrl: './liquide.component.html',
  styleUrls: ['./liquide.component.scss'],
})
export class LiquideComponent implements OnInit, OnDestroy {
  public showInputOtherRate = false;

  public subscriptions: any[] = [];

  public mainForm!: FormGroup;
  public capitalizacionClienteForm!: FormGroup;
  public abonosForm!: FormGroup;

  public radioButtonSelected: string = '';

  public mainDateBegin: string = moment(new Date()).format('MM-DD-YYYY');
  public mainDateEnd: string = moment(new Date()).format('MM-DD-YYYY');
  public abonosDate: string = moment(new Date()).format('MM-DD-YYYY');
  public capitalDate: string = moment(new Date()).format('MM-DD-YYYY');

  public dataAbonos: ITableBasic[] = [];
  public dataCapitalizacionCliente: ITableBasic[] = [];
  public idAbonos = 0;
  public idCapitalizacionCliente = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForms();
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
      capitalAdiccionales: new FormControl('', [Validators.required]),
      abonos: new FormControl('', [Validators.required]),
      capitalInicial: new FormControl('', [Validators.required]),
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
    if (event.target.value === 'option4') {
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
    }
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
