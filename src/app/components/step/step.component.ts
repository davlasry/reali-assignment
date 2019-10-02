import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnChanges, AfterViewInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;

  @Output() inputValueChange = new EventEmitter();

  // @ViewChild('someInput', { static: false }) someInput: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // this.someInput.nativeElement.focus();
  }

  ngOnChanges(changes) {
    console.log(changes.value);
    console.log('value', this.value);
    // if (this.someInput) {
    //   // this.someInput.nativeElement.value = this.value;
    //   this.renderer.setProperty(
    //     this.someInput.nativeElement,
    //     'value',
    //     this.value
    //   );
    //   this.someInput.nativeElement.focus();
    // }
  }

  onInputChange(event) {
    console.log('event:', event);
    this.inputValueChange.emit(event);
  }
}
