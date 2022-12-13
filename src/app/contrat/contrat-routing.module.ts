import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';

const routes: Routes = [


  {path:'',component:ListeContratComponent},
  {path:'addContrat',component:AddContratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
