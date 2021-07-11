import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CostComponent } from './page/cost/cost.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EditCostComponent } from './page/edit-cost/edit-cost.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //   }]
  // },

  {
    path: 'cost',
    component: CostComponent
  },
  {
    path: 'cost/:id',
    component: EditCostComponent
  },
  {
    path: '**',
    component: DashboardComponent,
  }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, {
    //   useHash: true
    // })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
