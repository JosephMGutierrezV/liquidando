import { Component, OnInit } from '@angular/core';
import {
  faLaugh,
  faArrowCircleDown,
  faPlayCircle,
  faAngleDown,
  faAngleUp,
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
  public isCollapsed = false;
  public faAngleDown = faAngleDown;
  public faAngleUp = faAngleUp;

  constructor() {}

  ngOnInit(): void {}
}
