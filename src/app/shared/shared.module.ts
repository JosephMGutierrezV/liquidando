import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PGridComponent } from './p-grid/p-grid.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimelineModule } from 'primeng/timeline';
import { StepsLiquideComponent } from './steps-liquide/steps-liquide.component';
import { StepsButtonsComponent } from './steps-buttons/steps-buttons.component';

@NgModule({
  declarations: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
    TimeLineComponent,
    StepsLiquideComponent,
    StepsButtonsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    NgbCollapseModule,
    TimelineModule,
  ],
  exports: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
    TimeLineComponent,
    StepsLiquideComponent,
    StepsButtonsComponent,
  ],
})
export class SharedModule {}
