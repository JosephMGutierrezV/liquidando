import { Component, OnInit } from '@angular/core';
import {
  faLaugh,
  faArrowCircleDown,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lading',
  templateUrl: './lading.component.html',
  styleUrls: ['./lading.component.scss'],
})
export class LadingComponent implements OnInit {
  public faArrowCircleDown = faArrowCircleDown;
  public faPlayCircle = faPlayCircle;
  public faLaughs = faLaugh;

  constructor() {}

  ngOnInit(): void {}
}
