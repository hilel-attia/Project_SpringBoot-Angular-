import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    //{ path: '/profile', title: "User Profile",  icon:'person', class: '' },
   // { path: '/events/list', title: "Events List",  icon:'event', class: '' },
    { path: '/departments/list', title: "Factures List",  icon:'layers', class: '' },
    
    //{ path: '/centers/list', title: "Training Centers List",  icon:'location_city', class: '' },
   //    { path: '/notifications', title: "Notifications",  icon:'notifications', class: '' },
    { path: '/login', title: "Logout",  icon:'unarchive', class: 'active-pro' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
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
