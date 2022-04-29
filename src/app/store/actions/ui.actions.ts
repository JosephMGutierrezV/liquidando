import { IError } from './../reducer/ui.reducer';
import { createAction, props } from '@ngrx/store';
import { ISuccess } from '../reducer/ui.reducer';

export const isLoading = createAction('[UI] is loading');
export const isNotLoading = createAction('[UI] is not loading');
export const isError = createAction(
  '[UI] is error',
  props<{ error: IError }>()
);
export const isSuccess = createAction(
  '[UI] is succes',
  props<{ success: ISuccess }>()
);
