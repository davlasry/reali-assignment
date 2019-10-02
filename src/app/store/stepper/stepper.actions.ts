import { createAction, props } from '@ngrx/store';

export const SetActiveStepIndex = createAction(
  '[Stepper] Set Active Step Index',
  props<{ selectedStepIndex: number }>()
);

export const SetStepValue = createAction(
  '[Stepper] Set Step Value',
  props<{ stepValue: string }>()
);

export const ClearStepsData = createAction('[Stepper] Clear Steps Data');
