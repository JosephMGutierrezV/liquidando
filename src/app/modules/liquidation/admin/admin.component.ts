import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public mainForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.mainForm = new FormGroup({
      BC_EA: new FormControl('', []),
      BC_MENSUAL: new FormControl('', []),
      USURA_EA: new FormControl('', []),
      USURA_MENSUAL: new FormControl('', []),
      IPC: new FormControl('', []),
    });
  }
}
