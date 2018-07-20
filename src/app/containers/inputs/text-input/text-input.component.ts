import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { ErrorsInputService } from '../../../services/errors-input.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent extends AbstractInputComponent<string>  {

  constructor(control : ControlContainer, errorsService : ErrorsInputService) { 
    super(control, errorsService);
  }

}
