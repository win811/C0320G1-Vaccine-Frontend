import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransCenterComponent } from './finance-management/trans-center/trans-center.component';
import { TransListComponent } from './finance-management/trans-w-patient/trans-list/trans-list.component';
import { TransEditComponent } from './finance-management/trans-w-patient/trans-edit/trans-edit.component';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransDelComponent } from './finance-management/trans-w-patient/trans-del/trans-del.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeUpdateComponent, PeriodicInjectionComponent, TransCenterComponent, TransListComponent, TransEditComponent, TransDelComponent],
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
    EmployeeUpdateComponent,
    TransEditComponent,
    TransDelComponent
  ],
})
export class AdminModule { }
