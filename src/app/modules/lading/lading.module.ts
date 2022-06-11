import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './lading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [LadingComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbCollapseModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
  ],
})
export class LadingModule {}
