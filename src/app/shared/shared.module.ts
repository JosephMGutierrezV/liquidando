import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PGridComponent } from './p-grid/p-grid.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PGridComponent, QuestionComponent],
  imports: [CommonModule, FontAwesomeModule, NgbCollapseModule],
  exports: [PGridComponent, QuestionComponent],
})
export class SharedModule {}
