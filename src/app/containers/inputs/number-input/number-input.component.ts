import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { ErrorsInputService } from '../../../services/errors-input.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberInputComponent),
    multi: true
  }]
})
export class NumberInputComponent extends AbstractInputComponent<number> {

  constructor(control : ControlContainer, errorsService : ErrorsInputService) { 
    super(control, errorsService);
  }

}
