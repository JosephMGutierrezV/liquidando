import { AppState } from './../../store/app.reducer';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../../store/actions';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-resume-liquide',
  templateUrl: './resume-liquide.component.html',
  styleUrls: ['./resume-liquide.component.scss'],
})
export class ResumeLiquideComponent implements OnInit, OnDestroy {
  @Input() showResume: boolean = false;

  public dataResumeAbonos = [];
  public dataResumeProceso = [];
  public dataComplementos = [];

  public totalInteresesMensualesResumen: number = 0;
  public totalInteresesDias: number = 0;
  public granTotalResumen: number = 0;

  public id: number = -1;
  public dataRequest: any;

  private token: string = '';

  @Output() showResumeChange = new EventEmitter<boolean>();

  public subscriptions: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initSubsAuth();
    this.initSubsLiquide();
  }

  private initSubsAuth() {
    this.subscriptions.push(
      this.store.select('auth').subscribe((state: any) => {
        this.token = state.token;
      })
    );
  }

  private initSubsLiquide() {
    this.subscriptions.push(
      this.store.select('liquide').subscribe((state: any) => {
        if (state.requestCalculo.id !== -1) {
          this.id = state.requestCalculo.id;
        }

        if (!state.loadingCalculo) {
          this.dataRequest = state.requestCalculo;
        }

        if (state.loadingCalculoFinal) {
          this.showResume = false;
          this.showResumeChange.emit(true);
        }

        if (state.loadingCalculo) {
          this.dataResumeProceso = state.responseCalculo.data;
          this.dataComplementos = state.responseCalculo.complemento;
          this.totalInteresesMensualesResumen =
            state.responseCalculo.totales[0];
          this.totalInteresesDias = state.responseCalculo.totales[1];
          this.granTotalResumen = state.responseCalculo.totales[2];
          this.dataResumeAbonos = state.responseCalculo.listaAC;
        } else {
          this.dataResumeProceso = [];
          this.dataComplementos = [];
          this.totalInteresesMensualesResumen = 0;
          this.totalInteresesDias = 0;
          this.granTotalResumen = 0;
          this.dataResumeAbonos = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  showResumeEvent() {
    this.showResumeChange.emit(true);
  }

  onClickSaveLiquide() {
    this.store.dispatch(actions.ui.isLoading());
    const decoded: any = jwt_decode(this.token);
    const requestCalculo = [
      decoded.identity.id,
      this.dataRequest.radicado,
      this.dataRequest.demandante,
      this.dataRequest.demandado,
      this.dataRequest.juzgado,
      this.dataRequest.valor,
      this.dataRequest.fechaInicial,
      this.dataRequest.fechaFinal,
      this.dataRequest.tipoTasa,
      '',
    ];
    const request = {
      dataProceso: this.dataResumeProceso,
      data: [],
      dataTotales: [
        this.totalInteresesMensualesResumen,
        this.totalInteresesDias,
        this.granTotalResumen,
      ],
      dataRequest: requestCalculo,
    };
    this.store.dispatch(
      actions.liquide.calculoFinalizarLoading({ request: request })
    );
  }
}
