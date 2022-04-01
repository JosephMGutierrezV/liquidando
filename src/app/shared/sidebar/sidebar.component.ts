import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faCalculator,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public faHome = faHome;
  public faCalculator = faCalculator;
  public faClock = faClock;

  constructor() {}

  ngOnInit(): void {}
}
