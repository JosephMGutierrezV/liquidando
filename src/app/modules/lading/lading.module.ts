import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './lading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
@NgModule({
  declarations: [LadingComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbCollapseModule,
    SharedModule,
    AuthModule,
  ],
})
export class LadingModule {}
