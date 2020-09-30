import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeUpdateComponent, PeriodicInjectionComponent, AdminLayoutComponent, FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  entryComponents: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent
  ],
})
export class AdminModule { }
