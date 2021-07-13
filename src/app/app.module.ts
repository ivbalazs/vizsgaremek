import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CostComponent } from './page/cost/cost.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { EditCostComponent } from './page/edit-cost/edit-cost.component';
import { CostCategoryComponent } from './page/cost-category/cost-category.component';
import { EditCostCategoryComponent } from './page/edit-cost-category/edit-cost-category.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CostComponent,
    NavigationComponent,
    DashboardComponent,
    SorterPipe,
    FilterPipe,
    EditCostComponent,
    CostCategoryComponent,
    EditCostCategoryComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
