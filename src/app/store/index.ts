import { ActionReducerMap } from '@ngrx/store';

import { StepperState, stepperReducer } from './stepper';
// import { LoggerState, loggerReducer } from './logger';

export interface State {
  stepper: StepperState;
  //   logger: LoggerState;
}

export const reducers: ActionReducerMap<State> = {
  stepper: stepperReducer
  //   logger: loggerReducer
};
