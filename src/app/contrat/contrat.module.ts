import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';


@NgModule({
  declarations: [
    ListeContratComponent,
    AddContratComponent,
    UpdateContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
