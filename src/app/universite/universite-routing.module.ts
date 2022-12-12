import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from 'app/contrat/add-contrat/add-contrat.component';
import { ListeContratComponent } from 'app/contrat/liste-contrat/liste-contrat.component';
import { UpdateContratComponent } from 'app/contrat/update-contrat/update-contrat.component';

const routes: Routes = [
  {path:'',component:ListeContratComponent},
  {path:'updateContrat/:id',component:UpdateContratComponent},
  {path:'addContrat',component:AddContratComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
