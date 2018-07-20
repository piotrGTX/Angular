import { Injectable } from '@angular/core';
import { FormControl } from '../../../node_modules/@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorsInputService {

  constructor() { 
  }

  private readonly allErrors = {
    'required': 'Pole jest wymagane !',
    'forbiddenName': 'Nazwa jest niedozwolona !',
    'incorrectNameAAA': 'Nazwa jest niepoprawna !',
  };
  private readonly possibleErrorsKey = Object.keys(this.allErrors);

  public getErrors(control : FormControl) : string[] {
    const controlErrorsKeys : string[] = control.errors ? Object.keys(control.errors) : [];
    return this.possibleErrorsKey.filter((err_key) => {
      return controlErrorsKeys.indexOf(err_key) !== (-1);      
    }).map((err_key) => {
      return this.allErrors[err_key];
    });
  }

}
