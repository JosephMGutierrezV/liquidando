import { AppState } from './../../../store/app.reducer';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as actions from '../../../store/actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() displayModalLogin = false;

  public subscriptions: any[] = [];

  public loginForm!: FormGroup;

  public type = 'password';

  public showForgetPass = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  changeShowPass(event: any) {
    this.type = event.target.checked ? 'text' : 'password';
  }

  showFormForgetPass() {
    this.showForgetPass = !this.showForgetPass;
  }

  login() {
    if (this.loginForm.valid) {
      const values = this.loginForm.value;
      this.store.dispatch(
        actions.auth.loginLoading({ user: values.email, psw: values.password })
      );
    } else {
      this.store.dispatch(
        actions.ui.isError({
          error: {
            message: 'Porfavor ingrese un correo y contraseña validos',
            code: 'login_error',
          },
        })
      );
    }
  }
}
