import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public isCollapsed = false;
  public faAngleDown = faAngleDown;
  public faAngleUp = faAngleUp;
  constructor() {}

  ngOnInit(): void {}
}
