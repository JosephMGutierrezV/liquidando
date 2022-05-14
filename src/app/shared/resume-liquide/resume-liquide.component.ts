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

  @Output() showResumeChange = new EventEmitter<boolean>();

  public subscriptions: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('liquide').subscribe((state: any) => {
        if (state.requestCalculo.id !== -1) {
          this.id = state.requestCalculo.id;
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
}
