import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { ImportVaccineComponent } from './import-vaccine/import-vaccine.component';
import { ExportVaccineComponent } from './export-vaccine/export-vaccine.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { MaterialModule } from '../material.module';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    VaccineStorageComponent, 
    ImportVaccineComponent, 
    ExportVaccineComponent,
    AdminCenterComponent,
    EmployeeListComponent, 
    EmployeeCreateComponent, 
    EmployeeUpdateComponent],
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
