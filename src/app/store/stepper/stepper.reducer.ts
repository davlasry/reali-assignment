import { Action, createReducer, on } from '@ngrx/store';
import * as stepperActions from './stepper.actions';
// import { featureAdapter } from './state';

const initialStepsData = [
  { label: 'Name', placeholder: 'Enter your name...', value: '' },
  { label: 'Phone', placeholder: 'Enter your phone...', value: '' },
  { label: 'Email', placeholder: 'Enter your email...', value: '' }
];

export interface StepperState {
  activeStepIndex: number;
  stepsData: any;
}

export const initialState: StepperState = {
  activeStepIndex: 0,
  stepsData: initialStepsData
};

const featureReducer = createReducer(
  initialState,
  on(stepperActions.SetActiveStepIndex, (state, { selectedStepIndex }) => ({
    ...state,
    activeStep: selectedStepIndex
  })),
  on(stepperActions.SetStepValue, (state, { stepValue }) => ({
    ...state,
    stepsData: state.stepsData.map((step, index) => {
      if (index === state.activeStepIndex) {
        return {
          ...step,
          value: stepValue
        };
      }

      return { ...step };
    })
  })),
  on(stepperActions.ClearStepsData, state => ({
    ...state,
    stepsData: state.stepsData.map(step => {
      step.value = '';
      return step;
    })
  }))
);

export function stepperReducer(
  state: StepperState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
