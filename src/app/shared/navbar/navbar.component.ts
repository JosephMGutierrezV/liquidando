import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public faBars = faBars;
  public faBell = faBell;

  constructor() {}

  ngOnInit(): void {}
}
