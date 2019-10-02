import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StepperState } from 'src/app/store/stepper/stepper.reducer';
import { Observable } from 'rxjs';
import {
  getActiveStepIndex,
  getStepsData,
  isStepperValid
} from 'src/app/store/stepper/stepper.selectors';
import {
  SetActiveStepIndex,
  SetStepValue,
  ClearStepsData
} from 'src/app/store/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  activeStepIndex$: Observable<number>;
  stepsData$: Observable<any>;
  isStepperValid$: Observable<boolean>;

  constructor(private store: Store<StepperState>) {
    this.activeStepIndex$ = this.store.pipe(select(getActiveStepIndex));
    this.stepsData$ = this.store.pipe(select(getStepsData));
    this.isStepperValid$ = this.store.pipe(select(isStepperValid));
  }

  onInputValueChanged(event) {
    this.store.dispatch(SetStepValue({ stepValue: event }));
  }

  selectStep(selectedStepIndex) {
    this.store.dispatch(SetActiveStepIndex({ selectedStepIndex }));
  }

  onSubmit() {
    this.store.dispatch(SetActiveStepIndex({ selectedStepIndex: -1 }));
  }

  onClear() {
    this.store.dispatch(ClearStepsData());
    this.store.dispatch(SetActiveStepIndex({ selectedStepIndex: 1 }));
  }
}
