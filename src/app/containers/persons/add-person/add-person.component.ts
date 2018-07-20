import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../../validators/forbiddenNameValidator';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  group : FormGroup;
  basicGroup : FormGroup;
  addressGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
  }

  ngOnInit() {

    this.basicGroup = this.formBuilder.group({
      name: [null, [Validators.required, forbiddenNameValidator(/piotr/i)]],
      surname: [null, Validators.required],
      age: [null, Validators.required]
    });

    this.addressGroup = this.formBuilder.group({
      street: null,
      city: [null, Validators.required]
    });

    this.group = this.formBuilder.group({
      basic: this.basicGroup,
      address: this.addressGroup
    });
  }

}
