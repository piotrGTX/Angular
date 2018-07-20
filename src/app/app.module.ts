import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './containers/persons/add-person/add-person.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatStepperModule }  from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperControllerComponent } from './containers/mat-stepper-controller/mat-stepper-controller.component';
import { TextInputComponent } from './containers/inputs/text-input/text-input.component';
import { BasicDataComponent } from "./containers/persons/basic-data/basic-data.component";
import { AddressDataComponent } from './containers/persons/address-data/address-data.component';
import { NumberInputComponent } from './containers/inputs/number-input/number-input.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    MatStepperControllerComponent,
    TextInputComponent,
    BasicDataComponent,
    AddressDataComponent,
    NumberInputComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    RoutingModule,
    ReactiveFormsModule, FormsModule,
    MatInputModule, MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
