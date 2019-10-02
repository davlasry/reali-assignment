import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnChanges {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;

  @Output() inputValueChange = new EventEmitter();

  @ViewChild('textInput', { static: false }) textInput;

  constructor() {}

  ngOnChanges(changes) {
    if (this.textInput) {
      this.textInput.nativeElement.focus();
    }
  }

  onInputChange(event) {
    this.inputValueChange.emit(event);
  }
}
