import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransWSupplierComponent } from './finance-management/trans-w-supplier/trans-w-supplier.component';
import { TransSupCreateComponent } from './finance-management/trans-w-supplier/trans-sup-create/trans-sup-create.component';
import { TransSupEditComponent } from './finance-management/trans-w-supplier/trans-sup-edit/trans-sup-edit.component';


const routes: Routes = [
  {
    path: 'supplier-transaction',component : TransWSupplierComponent,
  },
  {
    path: 'supplier-transaction/create', component: TransSupCreateComponent
  },
  {
    path: 'supplier-transaction/edit/:id', component: TransSupEditComponent
  },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "injected-list", component: PeriodicInjectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
