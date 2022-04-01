import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public faBars = faBars;
  public faBell = faBell;

  @Output() toggleMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.toggleMenu.emit();
  }
}
