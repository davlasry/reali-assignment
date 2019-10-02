import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StepperState } from 'src/app/store/stepper/stepper.reducer';
import { Observable } from 'rxjs';
import {
  getActiveStepIndex,
  getStepsData,
  getActiveStepData,
  getIsFormSubmitted,
  getIsStepperValid
} from 'src/app/store/stepper/stepper.selectors';
import {
  SetActiveStepIndex,
  SetStepValue,
  ClearStepsData,
  SubmitForm
} from 'src/app/store/stepper';
import { IStepData } from 'src/app/shared/stepData';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  activeStepIndex$: Observable<number>;
  stepsData$: Observable<IStepData[]>;
  activeStepData$: Observable<IStepData>;
  isStepperValid$: Observable<boolean>;
  isFormSubmitted$: Observable<boolean>;

  constructor(private store: Store<StepperState>) {
    this.activeStepIndex$ = this.store.pipe(select(getActiveStepIndex));
    this.stepsData$ = this.store.pipe(select(getStepsData));
    this.activeStepData$ = this.store.pipe(select(getActiveStepData));
    this.isStepperValid$ = this.store.pipe(select(getIsStepperValid));
    this.isFormSubmitted$ = this.store.pipe(select(getIsFormSubmitted));
  }

  onInputValueChanged(event) {
    this.store.dispatch(SetStepValue({ stepValue: event }));
  }

  selectStep(selectedStepIndex) {
    this.store.dispatch(SetActiveStepIndex({ selectedStepIndex }));
  }

  onSubmit() {
    this.store.dispatch(SubmitForm());
  }

  onClear() {
    this.store.dispatch(ClearStepsData());
  }
}
