import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  faLaugh,
  faArrowCircleDown,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../store/actions';

@Component({
  selector: 'app-lading',
  templateUrl: './lading.component.html',
  styleUrls: ['./lading.component.scss'],
})
export class LadingComponent implements OnInit {
  public faArrowCircleDown = faArrowCircleDown;
  public faPlayCircle = faPlayCircle;
  public faLaughs = faLaugh;
  public displayModalLogin = false;
  public displayModalRegister = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
