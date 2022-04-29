import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-table-basic',
  templateUrl: './p-table-basic.component.html',
  styleUrls: ['./p-table-basic.component.scss']
})
export class PTableBasicComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
