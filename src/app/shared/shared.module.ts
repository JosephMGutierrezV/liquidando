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

@NgModule({
  declarations: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
    TimeLineComponent,
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
  ],
})
export class SharedModule {}
