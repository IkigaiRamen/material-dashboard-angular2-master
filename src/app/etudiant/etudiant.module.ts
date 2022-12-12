import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';


@NgModule({
  declarations: [
    UpdateEtudiantComponent,
    AddEtudiantComponent,
    ListeEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
