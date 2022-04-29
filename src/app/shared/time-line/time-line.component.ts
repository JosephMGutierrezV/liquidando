import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
  public events: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.events = ['Valor', 'Fechas', 'Tasa', 'Liquide', ''];
  }
}
