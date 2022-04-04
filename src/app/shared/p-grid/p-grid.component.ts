import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-grid',
  templateUrl: './p-grid.component.html',
  styleUrls: ['./p-grid.component.scss'],
})
export class PGridComponent implements OnInit {
  public loading = false;
  public historials: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
