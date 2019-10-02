import { Action, createReducer, on } from '@ngrx/store';
import * as stepperActions from './stepper.actions';

const initialStepsData = [
  { label: 'Name', placeholder: 'Enter your name...', value: '' },
  { label: 'Phone', placeholder: 'Enter your phone...', value: '' },
  { label: 'Email', placeholder: 'Enter your email...', value: '' }
];

export interface StepperState {
  activeStepIndex: number;
  activeStepData: any;
  stepsData: any;
  isFormSubmitted: boolean;
}

export const initialState: StepperState = {
  activeStepIndex: 0,
  activeStepData: initialStepsData[0],
  stepsData: initialStepsData,
  isFormSubmitted: false
};

const featureReducer = createReducer(
  initialState,
  on(stepperActions.SetActiveStepIndex, (state, { selectedStepIndex }) => ({
    ...state,
    activeStepIndex: selectedStepIndex
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
    activeStepIndex: 0,
    isFormSubmitted: false,
    stepsData: state.stepsData.map(step => {
      step.value = '';
      return step;
    })
  })),
  on(stepperActions.SubmitForm, state => ({
    ...state,
    isFormSubmitted: true
  }))
);

export function stepperReducer(
  state: StepperState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
