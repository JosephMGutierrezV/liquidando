import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @ViewChild('calendar') calendar!: Calendar;

  @Input() textLabel: string = '';
  @Input() disabled: boolean = false;
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() disabledDates!: Array<Date>;

  @Output() returnDate = new EventEmitter<any>();

  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  getData() {
    const dateFormated = moment(this.date).format('YYYY-MM-DD');
    this.returnDate.emit(dateFormated);
  }

  resetDefault() {
    let date: any = moment(new Date()).format('YYYY-MM-DD');
    for (let i = 0; i < this.disabledDates.length; i++) {
      date = new Date(date).setDate(new Date(date).getDate() + 1);
      if (moment(this.disabledDates[i]).format('YYYY-MM-DD') !== date) {
        this.date = new Date(date);
        break;
      }
    }
    this.calendar.updateUI();
  }
}
