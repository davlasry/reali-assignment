import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { Store, select } from '@ngrx/store';
import { StepperState } from 'src/app/store/stepper/stepper.reducer';
import { Observable } from 'rxjs';
import {
  getActiveStep,
  getStepsData,
  isStepperValid
} from 'src/app/store/stepper/stepper.selectors';
import {
  SetActiveStep,
  SetStepValue,
  ClearStepsData
} from 'src/app/store/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {
  activeStep$: Observable<number>;
  stepsData$: Observable<any>;
  isStepperValid$: Observable<boolean>;

  @ViewChild(StepComponent, { static: false }) stepComponent: StepComponent;

  ngAfterViewInit() {
    // console.log(this.someInput);
  }

  constructor(private store: Store<StepperState>) {
    this.activeStep$ = this.store.pipe(select(getActiveStep));
    this.stepsData$ = this.store.pipe(select(getStepsData));
    this.isStepperValid$ = this.store.pipe(select(isStepperValid));
  }

  onInputValueChanged(event) {
    console.log('event:', event);
  }

  selectStep(selectedStep) {
    // TODO: if the selectedStep is the same as the activeStep, do nothing
    // if (selectedStep === this.activeStep) {
    //   return;
    // }
    const stepValue = this.stepComponent.someInput.nativeElement.value;
    console.log('stepValue:', stepValue);
    if (stepValue) {
      this.store.dispatch(SetStepValue({ stepValue }));
      this.store.dispatch(SetActiveStep({ selectedStep }));
    }
  }

  onSubmit() {
    console.log('Submit');
    this.store.dispatch(SetActiveStep({ selectedStep: 0 }));
  }

  onClear() {
    console.log('Clear');
    this.store.dispatch(ClearStepsData());
    this.store.dispatch(SetActiveStep({ selectedStep: 1 }));
  }
}
