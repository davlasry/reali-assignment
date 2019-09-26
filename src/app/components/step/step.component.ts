import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  // tslint:disable-next-line: no-input-rename
  @Input() label: string;
  @Input() placeholder: string;
  @Input() index: number;
  @Input() active: boolean;
}
