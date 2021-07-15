import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'leaderboard', class: '' },
  { path: '/cost', title: 'Költségek', icon: 'credit_card', class: '' },
  { path: '/costcategory', title: 'Költség kategóriák', icon: 'category', class: '' },
  { path: '/costservice', title: 'Költség szolgáltatók', icon: 'store', class: '' },
  { path: '/income', title: 'Bevételek', icon: 'account_balance_wallet', class: '' },
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