import { AttachmentsFilesService } from './../../services/attachments-files.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(private attachmentsFilesService: AttachmentsFilesService) {}

  ngOnInit(): void {}

  search(event: any) {
    this.dt.filterGlobal(event.target.value, 'contains');
  }

  clear(table: Table) {
    this.inputSearch.nativeElement.value = '';
    table.clear();
  }

  getPdf(id: number) {
    return this.attachmentsFilesService.getPdf(id);
  }

  getExcel(id: number) {
    return this.attachmentsFilesService.getExcel(id);
  }
}
