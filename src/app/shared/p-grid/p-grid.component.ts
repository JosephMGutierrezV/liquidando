import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-p-grid',
  templateUrl: './p-grid.component.html',
  styleUrls: ['./p-grid.component.scss'],
})
export class PGridComponent implements OnInit {
  @Input() loading = false;
  @Input() historials: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
