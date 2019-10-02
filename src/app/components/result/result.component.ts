import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IStepData } from 'src/app/shared/stepData';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() stepsData: IStepData[];
  @Output() valueChange = new EventEmitter();
}
