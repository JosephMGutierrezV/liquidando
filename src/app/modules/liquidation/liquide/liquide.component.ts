import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquide',
  templateUrl: './liquide.component.html',
  styleUrls: ['./liquide.component.scss'],
})
export class LiquideComponent implements OnInit {
  public showInputOtherRate = false;

  constructor() { }

  ngOnInit(): void { }

  onItemChange(event: any) {
    if (event.target.value === 'option4') {
      this.showInputOtherRate = true;
    } else {
      this.showInputOtherRate = false;
    }
  }
}
