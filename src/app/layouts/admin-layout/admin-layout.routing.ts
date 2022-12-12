import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EquipeModule } from 'app/equipe/equipe.module';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    {path: 'equipe',
    loadChildren:()=>import('app/equipe/equipe.module').then(x => x.EquipeModule)}, 
    {path: 'etudiant',
    loadChildren:()=>import('app/etudiant/etudiant.module').then(x => x.EtudiantModule)}, 
    {path: 'universite',
    loadChildren:()=>import('app/universite/universite.module').then(x => x.UniversiteModule)}, 
    {path: 'departement',
    loadChildren:()=>import('app/departement/departement.module').then(x => x.DepartementModule)}, 
    {path: 'detailEquipe',
    loadChildren:()=>import('app/detail-equipe/detail-equipe.module').then(x => x.DetailEquipeModule)}, 
    {path: 'contrat',
    loadChildren:()=>import('app/contrat/contrat.module').then(x => x.ContratModule)}, 
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
