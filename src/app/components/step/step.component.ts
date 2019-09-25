import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('tabTitle') title: string;
  @Input() active = false;
}
