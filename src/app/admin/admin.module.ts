import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { ImportVaccineComponent } from './import-vaccine/import-vaccine.component';
import { ExportVaccineComponent } from './export-vaccine/export-vaccine.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { MaterialModule } from '../material.module';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { ContactReplyComponent } from './contact-reply/contact-reply.component';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { TransCenterComponent } from './finance-management/trans-center/trans-center.component';
import { TransListComponent } from './finance-management/trans-w-patient/trans-list/trans-list.component';
import { TransEditComponent } from './finance-management/trans-w-patient/trans-edit/trans-edit.component';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransWSupplierComponent } from './finance-management/trans-w-supplier/trans-w-supplier.component';
import { TransSupEditComponent } from './finance-management/trans-w-supplier/trans-sup-edit/trans-sup-edit.component';
import { TransSupCreateComponent } from './finance-management/trans-w-supplier/trans-sup-create/trans-sup-create.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { NavbarComponent } from './admin-layout/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineUpdatePriceComponent } from './vaccine-update-price/vaccine-update-price.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientCreateComponent } from './patient/patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient/patient-update/patient-update.component';



@NgModule({
  declarations: [
    EmployeeListComponent, EmployeeCreateComponent, EmployeeUpdateComponent, PeriodicInjectionComponent, TransCenterComponent, TransListComponent, TransEditComponent, TransWSupplierComponent, TransSupEditComponent, TransSupCreateComponent,
    VaccineStorageComponent, 
    ImportVaccineComponent, 
    VaccineStorageComponent,
    VaccineListComponent,
    ImportVaccineComponent,
    ExportVaccineComponent,
    AdminCenterComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ContactBoxComponent,
    EmployeeListComponent, 
    EmployeeCreateComponent,
    ContactReplyComponent,
    PeriodicInjectionComponent,
    EmployeeUpdateComponent,
    TransCenterComponent,
    TransListComponent,
    TransEditComponent,
    AdminLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    VaccineUpdatePriceComponent,
    PatientListComponent,
    PatientCreateComponent,
    PatientUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    ScrollingModule,

  ],
  entryComponents: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    VaccineUpdatePriceComponent,
    PatientUpdateComponent,
    PatientCreateComponent
  ],
})
export class AdminModule { }
