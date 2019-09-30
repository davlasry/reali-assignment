import { ActionReducerMap } from '@ngrx/store';

import { StepperState, stepperReducer } from './stepper';

export interface State {
  stepper: StepperState;
}

export const reducers: ActionReducerMap<State> = {
  stepper: stepperReducer
};
