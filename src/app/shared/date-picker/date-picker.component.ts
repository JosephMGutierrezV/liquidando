import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() textLabel: string = '';

  @Output() returnDate = new EventEmitter<any>();

  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  getData() {
    this.returnDate.emit(this.date);
  }
}
