import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/equipe', title: 'equipe',  icon: 'dashboard', class: '' },
    { path: '/etudiant', title: 'Etudiant',  icon: 'dashboard', class: '' },
    { path: '/universite', title: 'Universite',  icon: 'dashboard', class: '' },
    { path: '/departement', title: 'Departement',  icon: 'dashboard', class: '' },
    { path: '/detailEquipe', title: 'DetailsEquipe',  icon: 'dashboard', class: '' },
    { path: '/contrat', title: 'Contrat',  icon: 'dashboard', class: '' },

    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
