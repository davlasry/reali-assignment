import { createAction, props } from '@ngrx/store';

export const SetActiveStep = createAction(
  '[Stepper] Set Active Step',
  props<{ selectedStep: number }>()
);

export const SetStepValue = createAction(
  '[Stepper] Set Step Value',
  props<{ stepValue: string }>()
);

export const ClearStepsData = createAction('[Stepper] Clear Steps Data');
