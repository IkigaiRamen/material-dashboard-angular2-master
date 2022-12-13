import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeContratComponent,
    AddContratComponent,
    UpdateContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule,
  ]
})
export class ContratModule { }
