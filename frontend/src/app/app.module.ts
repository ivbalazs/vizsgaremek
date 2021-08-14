import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { CostComponent } from './page/cost/cost.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { EditCostComponent } from './page/edit-cost/edit-cost.component';
import { CostCategoryComponent } from './page/cost-category/cost-category.component';
import { EditCostCategoryComponent } from './page/edit-cost-category/edit-cost-category.component';
import { EditCostServiceComponent } from './page/edit-cost-service/edit-cost-service.component';
import { CostServiceComponent } from './page/cost-service/cost-service.component';
import { IncomeComponent } from './page/income/income.component';
import { EditIncomeComponent } from './page/edit-income/edit-income.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './service/jwt-interceptor.service';

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
    CostComponent,
    SorterPipe,
    FilterPipe,
    EditCostComponent,
    CostCategoryComponent,
    EditCostCategoryComponent,
    EditCostServiceComponent,
    CostServiceComponent,
    IncomeComponent,
    EditIncomeComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
    ForbiddenComponent,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
