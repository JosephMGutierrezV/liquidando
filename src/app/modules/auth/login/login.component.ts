import { AppState } from './../../../store/app.reducer';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as actions from '../../../store/actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public forgetForm!: FormGroup;

  @Input() displayModalLogin = false;

  public subscriptions: any[] = [];

  public loginForm!: FormGroup;

  public type = 'password';

  @Input() showForgetPass = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    this.forgetForm = new FormGroup({
      emailForgetPass: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
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

  onHideLogin() {
    this.showForgetPass = false;
  }

  sendChangePassword() {
    const data = {
      email: this.forgetForm.value.emailForgetPass,
      psw: this.pswRandom(),
    };
    this.store.dispatch(actions.auth.forgetPasswordLoading({ dataUser: data }));
  }

  private pswRandom() {
    const gLength = 12;
    const characters = [
      {
        name: 'Lowercase',
        value: 'abcdefghijklmnopqrstuvwxyz',
        checked: true,
      },
      {
        name: 'Uppercase',
        value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        checked: true,
      },
      {
        name: 'Numbers',
        value: '0123456789',
        checked: true,
      },
      {
        name: 'Special Characters',
        value: '_-+=)(*&^%$#@!`~',
        checked: false,
      },
    ];
    let result = '';
    let charactersVal = '';
    for (var j = 0; j < characters.length; j++) {
      if (characters[j].checked) {
        charactersVal += characters[j].value;
      }
    }
    for (var i = 0; i < gLength; i++) {
      result += charactersVal.charAt(
        Math.floor(Math.random() * charactersVal.length)
      );
    }
    return result;
  }
}
