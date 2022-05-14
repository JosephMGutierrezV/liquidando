import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  ui: reducers.ui.StateUI;
  stepsFastLiquide: reducers.stepsFastLiquide.StateFastLiquide;
  auth: reducers.auth.StateLogin;
  liquide: reducers.liquide.StateLiquide;
  historial: reducers.historial.StateHistorial;
  tasa: reducers.tasa.StateTasa;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.ui.reducerUi,
  stepsFastLiquide: reducers.stepsFastLiquide.reducerFastLiquide,
  auth: reducers.auth.reducerAuth,
  liquide: reducers.liquide.reducerLiquide,
  historial: reducers.historial.reducerHistorial,
  tasa: reducers.tasa.reducerTasa,
};
