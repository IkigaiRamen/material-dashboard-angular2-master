import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';


@NgModule({
  declarations: [
    ListeDepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
