import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransCenterComponent } from './finance-management/trans-center/trans-center.component';
import { TransListComponent } from './finance-management/trans-w-patient/trans-list/trans-list.component';

const routes: Routes = [
  { path: "employee-list", component: EmployeeListComponent },
  { path: "injected-list", component: PeriodicInjectionComponent },
  {
    path: "finance", component: TransCenterComponent,
    children: [
      { path: "patient", component: TransListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
