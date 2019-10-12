import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'i-Drive Overview',  icon: 'dashboard', class: '' },
  /*  { path: '/user-profile', title: 'News and Updates',  icon:'person', class: '' },*/
    { path: '/table-list', title: '7 Pillars of i-Drive',  icon:'gamepad', class: '' },
    { path: '/typography', title: 'Emerging Technologies',  icon:'offline_bolt', class: '' },
    { path: '/icons', title: 'People\' Corner',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Gallery',  icon:'movie', class: '' },
    { path: '/notifications', title: 'News and Updates',  icon:'notifications', class: '' },
  
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
