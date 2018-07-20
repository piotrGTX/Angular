

export class PersonBasic {
  name : string;
  surname : string;
}

export class PersonAddress {
  street : string;
  city : string;
}

export class Person {

  basic : PersonBasic;
  address: PersonAddress;

  constructor() {
    this.basic = new PersonBasic();
    this.address = new PersonAddress();
  }

}
