import { Component } from '@angular/core';
import { AbstractDataComponent } from '../abstract-data/abstract-data.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent extends AbstractDataComponent {

  setThisGroupName(): string {
    return 'basic';
  }

  constructor(formBuilder : FormBuilder) { 
    super(formBuilder);
  } 

}
