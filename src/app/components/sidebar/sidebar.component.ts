import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'app/service/config.service';
import { Subscription } from 'rxjs';
import { User } from 'app/model/user';
import { AuthService } from 'app/service/auth.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'leaderboard', class: '' },
  { path: '/income', title: 'Bevételek', icon: 'account_balance_wallet', class: '' },
  { path: '/cost', title: 'Költségek', icon: 'credit_card', class: '' },
  { path: '/costcategory', title: 'Költség kategóriák', icon: 'category', class: '' },
  { path: '/costservice', title: 'Költség szolgáltatók', icon: 'store', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  menuItems: any[];
  //új nav:
  navigation = this.config.navigation;
  loginStatus = false;
  userSub: Subscription;
  user: User | null = null;

  // új nav:
  constructor(
    private config: ConfigService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    //új nav:
    this.userSub = this.auth.currentUserSubject.subscribe(
      user => this.user = user
    );

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  //új nav:
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.auth.logout();
  }

}
