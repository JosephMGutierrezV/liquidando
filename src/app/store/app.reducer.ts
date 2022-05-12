import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  ui: reducers.ui.StateUI;
  stepsFastLiquide: reducers.stepsFastLiquide.StateFastLiquide;
  auth: reducers.auth.StateLogin;
  liquide: reducers.liquide.StateLiquide;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.ui.reducerUi,
  stepsFastLiquide: reducers.stepsFastLiquide.reducerFastLiquide,
  auth: reducers.auth.reducerAuth,
  liquide: reducers.liquide.reducerLiquide,
};
