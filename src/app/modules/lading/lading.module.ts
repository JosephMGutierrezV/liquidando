import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './lading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [LadingComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class LadingModule {
  public faArrowDown = faArrowDown;
}
