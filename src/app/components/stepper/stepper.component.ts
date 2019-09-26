import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { Store, select } from '@ngrx/store';
import { StepperState } from 'src/app/store/stepper/stepper.reducer';
import { Observable } from 'rxjs';
import { getActiveStep } from 'src/app/store/stepper/stepper.selectors';
import { SetActiveStep } from 'src/app/store/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
  @Input() steps;

  activeStep$: Observable<number>;
  // @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  constructor(private store: Store<StepperState>) {
    this.activeStep$ = this.store.pipe(select(getActiveStep));
  }

  // contentChildren are set
  ngAfterContentInit() {
    //   // get all active tabs
    //   const activeStep = this.steps.filter(tab => tab.active);
    //   // if there is no active tab set, activate the first
    //   if (activeStep.length === 0) {
    //     // this.selectStep(this.steps.first);
    //     this.selectStep(1);
    //   }
  }

  selectStep(selectedStep) {
    // deactivate all tabs
    // this.steps.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    // selectedStep.active = true;

    this.store.dispatch(SetActiveStep({ selectedStep }));
  }

  onSubmit() {
    console.log('Submit');
  }

  onClear() {
    console.log('Clear');
  }
}
