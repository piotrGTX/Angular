import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AbstractDataComponent } from '../abstract-data/abstract-data.component';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.scss' ]
})
export class AddressDataComponent extends AbstractDataComponent {

  setThisGroupName() : string {
    return 'address';
  }

  constructor(formBuilder : FormBuilder) { 
    super(formBuilder);
  } 

}
