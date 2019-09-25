import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepComponent) tabs: QueryList<StepComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(selectedTab) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    selectedTab.active = true;
  }

  onSubmit() {
    console.log('Submit');
  }

  onClear() {
    console.log('Submit');
  }
}
