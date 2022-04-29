import { createReducer, on } from '@ngrx/store';
import * as fastLiquide from '../actions/steps-fast-liquide.actions';

export interface StateFastLiquide {
  step: number;
}

const initialState: StateFastLiquide = {
  step: 1,
};

const _reducerFastLiquide = createReducer(
  initialState,
  on(fastLiquide.nextStep, (state, {}) => ({ ...state, step: state.step + 1 })),
  on(fastLiquide.previousStep, (state, {}) => ({
    ...state,
    step: state.step - 1,
  }))
);

export function reducerFastLiquide(state: any, action: any) {
  return _reducerFastLiquide(state, action);
}
