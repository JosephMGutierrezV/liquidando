import { AppState } from './../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as actions from '../../../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() displayModalRegister = false;

  public subscriptions: any[] = [];

  public registerForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      typeUser: new FormControl('', [Validators.required]),
    });
  }

  register() {
    if (this.registerForm.valid) {
      const values = this.registerForm.value;
      if (values.password !== values.passwordConfirm) {
        this.store.dispatch(
          actions.ui.isError({
            error: {
              message: 'Las contraseñas no coinciden',
              code: 'register_error',
            },
          })
        );
      } else {
        this.store.dispatch(
          actions.auth.registerUserLoading({
            dataUser: {
              email: values.email,
              password: values.password,
              repeatPassword: values.passwordConfirm,
              name: values.name,
              type: values.typeUser,
            },
          })
        );
      }
    } else {
      this.store.dispatch(
        actions.ui.isError({
          error: {
            message: 'Porfavor llene correctamente todos los campos',
            code: 'register_error',
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
