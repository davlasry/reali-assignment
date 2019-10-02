import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StepperState } from './stepper.reducer';
import { IStepData } from 'src/app/shared/stepData';

export const getStepperState = createFeatureSelector<StepperState>('stepper');

export const getActiveStepIndex = createSelector(
  getStepperState,
  (stepperState: StepperState): number => stepperState.activeStepIndex
);

export const getStepsData = createSelector(
  getStepperState,
  (stepperState: StepperState): IStepData[] => stepperState.stepsData
);

export const getActiveStepData = createSelector(
  getStepsData,
  getActiveStepIndex,
  (stepsData: IStepData[], activeStepIndex: number): IStepData =>
    stepsData[activeStepIndex]
);

export const getIsStepperValid = createSelector(
  getStepsData,
  (stepsData: IStepData[]): boolean =>
    stepsData.every(step => step.value !== '')
);

export const getIsFormSubmitted = createSelector(
  getStepperState,
  (stepperState: StepperState) => stepperState.isFormSubmitted
);
