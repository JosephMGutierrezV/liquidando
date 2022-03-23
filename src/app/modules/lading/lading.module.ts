import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './lading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [LadingComponent],
  imports: [CommonModule, FontAwesomeModule, NgbCollapseModule],
})
export class LadingModule {}
