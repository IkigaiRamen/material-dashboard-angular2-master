import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EquipeModule { }
