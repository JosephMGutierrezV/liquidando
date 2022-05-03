import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-p-table-basic',
  templateUrl: './p-table-basic.component.html',
  styleUrls: ['./p-table-basic.component.scss'],
})
export class PTableBasicComponent implements OnInit {
  @Input() data: any;
  @Output() onDeleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(event: any) {
    this.onDeleteEvent.emit(event);
  }
}
