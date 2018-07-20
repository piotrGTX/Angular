import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from '../containers/persons/add-person/add-person.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  { path: '', redirectTo: 'persons/add', pathMatch: 'full' },
  { path: 'persons/add', component: AddPersonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
