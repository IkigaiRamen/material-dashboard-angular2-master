import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { UpdateDetailequipeComponent } from './update-detailequipe/update-detailequipe.component';
import { AddDetailequipeComponent } from './add-detailequipe/add-detailequipe.component';
import { ListeDetailequipeComponent } from './liste-detailequipe/liste-detailequipe.component';


@NgModule({
  declarations: [
    UpdateDetailequipeComponent,
    AddDetailequipeComponent,
    ListeDetailequipeComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule
  ]
})
export class DetailEquipeModule { }
