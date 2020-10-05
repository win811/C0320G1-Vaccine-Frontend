import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import {AdminCenterComponent} from './admin-center/admin-center.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactBoxComponent} from './contact-box/contact-box.component';
import {ContactReplyComponent} from './contact-reply/contact-reply.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransWSupplierComponent } from './finance-management/trans-w-supplier/trans-w-supplier.component';
import { TransSupCreateComponent } from './finance-management/trans-w-supplier/trans-sup-create/trans-sup-create.component';
import { TransSupEditComponent } from './finance-management/trans-w-supplier/trans-sup-edit/trans-sup-edit.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {VaccineListComponent} from './vaccine-list/vaccine-list.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {PatientUpdateComponent} from './patient/patient-update/patient-update.component';

const routes: Routes = [
  {
    path: "", component: AdminLayoutComponent, children: [
      {path: "employee-list", component: EmployeeListComponent },
      {path: "injected-list", component: PeriodicInjectionComponent },
      {path: 'vaccine-storage',component: VaccineStorageComponent},
      {path: 'contactBox', component: ContactBoxComponent},
      {path: 'contact/:id', component: ContactReplyComponent},
      {path: 'vaccine-list', component: VaccineListComponent},
      {path: 'patient-list', component: PatientListComponent},
      {path: 'patient-list/update/:id', component: PatientUpdateComponent},
      {
        path: 'supplier-transaction',component : TransWSupplierComponent,
      },
      {
        path: 'supplier-transaction/create', component: TransSupCreateComponent
      },
      {
        path: 'supplier-transaction/edit/:id', component: TransSupEditComponent
      } 
    ]
  },
   

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
