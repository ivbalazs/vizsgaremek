import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CostComponent } from './page/cost/cost.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EditCostComponent } from './page/edit-cost/edit-cost.component';
import { CostCategoryComponent } from './page/cost-category/cost-category.component';
import { EditCostCategoryComponent } from './page/edit-cost-category/edit-cost-category.component';
import { CostServiceComponent } from './page/cost-service/cost-service.component';
import { EditCostServiceComponent } from './page/edit-cost-service/edit-cost-service.component';
import { EditIncomeComponent } from './page/edit-income/edit-income.component';
import { IncomeComponent } from './page/income/income.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    }
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
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
    path: 'costcategory',
    component: CostCategoryComponent
  },
  {
    path: 'costcategory/:id',
    component: EditCostCategoryComponent
  },
  {
    path: 'costservice',
    component: CostServiceComponent
  },
  {
    path: 'costservice/:id',
    component: EditCostServiceComponent
  },
  {
    path: 'income',
    component: IncomeComponent
  },
  {
    path: 'income/:id',
    component: EditIncomeComponent
  },

  // {
  //   path: '**',
  //   component: DashboardComponent,
  // }
  {
    path: '**',
    redirectTo: '',
  },

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
