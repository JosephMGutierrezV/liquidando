import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-p-grid',
  templateUrl: './p-grid.component.html',
  styleUrls: ['./p-grid.component.scss'],
})
export class PGridComponent implements OnInit {
  @Input() loading = false;
  @Input() historials: any[] = [];
  @ViewChild('dt') dt!: Table;
  @ViewChild('inputSearch') inputSearch!: any;

  constructor() {}

  ngOnInit(): void {}

  search(event: any) {
    this.dt.filterGlobal(event.target.value, 'contains');
  }

  clear(table: Table) {
    this.inputSearch.nativeElement.value = '';
    table.clear();
  }
}
