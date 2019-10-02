import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stepLabel' })
export class StepLabelPipe implements PipeTransform {
  transform(labelText: number, labelIndex: number) {
    return `${labelIndex + 1}. ${labelText}`;
  }
}
