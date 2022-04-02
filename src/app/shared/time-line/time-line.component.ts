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
    this.events = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5', ''];
  }
}
