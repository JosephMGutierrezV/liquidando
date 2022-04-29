import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  ui: reducers.ui.StateUI;
  stepsFastLiquide: reducers.stepsFastLiquide.StateFastLiquide;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: reducers.ui.reducerUi,
  stepsFastLiquide: reducers.stepsFastLiquide.reducerFastLiquide,
};
