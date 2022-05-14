import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() textLabel: string = '';
  @Input() disabled: boolean = false;

  @Output() returnDate = new EventEmitter<any>();

  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  getData() {
    const dateFormated = moment(this.date).format('YYYY-MM-DD');
    this.returnDate.emit(dateFormated);
  }
}
