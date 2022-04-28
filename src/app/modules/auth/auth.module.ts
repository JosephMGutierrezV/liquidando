import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, DialogModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
