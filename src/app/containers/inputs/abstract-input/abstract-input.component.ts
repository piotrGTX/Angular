import { OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { ErrorsInputService } from '../../../services/errors-input.service';

export abstract class AbstractInputComponent<T> implements OnInit {

  @Input()
  placeholder : string;
  @Input()
  controlName : string;

  formGroup : FormGroup;
  formControl : FormControl;

  errors : string[] = [];

  constructor(protected control : ControlContainer, protected errorsService : ErrorsInputService) { }

  ngOnInit() {
    this.setGroups();

    this.formControl.valueChanges.subscribe(() => {
      this.errors = this.errorsService.getErrors(this.formControl);
    })
  }

  private setGroups() {
    this.formGroup = this.control.control as FormGroup;
    this.formControl = this.control.control.get(this.controlName) as FormControl;
  }

}
