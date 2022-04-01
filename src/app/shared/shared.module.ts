import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PGridComponent } from './p-grid/p-grid.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [RouterModule, CommonModule, FontAwesomeModule, NgbCollapseModule],
  exports: [
    PGridComponent,
    QuestionComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
