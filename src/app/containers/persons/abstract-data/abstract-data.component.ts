import { OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export abstract class AbstractDataComponent implements OnInit {

  @Input()
  fullGroup : FormGroup;
  group : FormGroup;

  abstract setThisGroupName() : string;

  constructor(protected formBuilder : FormBuilder) {
  }

  ngOnInit() {
    this.setGroup();
  }

  private setGroup() {
    this.group = this.fullGroup.get(this.setThisGroupName()) as FormGroup;
  }

}
