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
  getStepsData
} from 'src/app/store/stepper/stepper.selectors';
import { SetActiveStep } from 'src/app/store/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {
  activeStep$: Observable<number>;
  stepsData$: Observable<any>;

  @ViewChild(StepComponent, { static: false }) someInput: StepComponent;

  // @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  ngAfterViewInit() {
    console.log(this.someInput);
  }

  constructor(private store: Store<StepperState>) {
    this.activeStep$ = this.store.pipe(select(getActiveStep));
    this.stepsData$ = this.store.pipe(select(getStepsData));
  }

  selectStep(selectedStep) {
    console.log(this.someInput.value);
    if (this.someInput.value) {
      this.store.dispatch(SetActiveStep({ selectedStep }));
    }
  }

  onSubmit() {
    console.log('Submit');
  }

  onClear() {
    console.log('Clear');
  }
}
