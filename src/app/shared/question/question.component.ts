import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public isCollapsed = true;
  public faAngleDown = faAngleDown;
  public faAngleUp = faAngleUp;
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
