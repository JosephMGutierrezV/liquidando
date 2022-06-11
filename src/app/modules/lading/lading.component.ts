import { QuestionsService } from './services/questions.service';
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
  public displayModalLogin = false;
  public displayModalRegister = false;
  public showForgetPass = false;
  public questionsAnswers!: any;

  constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsAnswers = this.questionService.getQuestions();
  }

  onDisplayLogin() {
    this.showForgetPass = false;
    this.displayModalLogin = !this.displayModalLogin;
  }
}
