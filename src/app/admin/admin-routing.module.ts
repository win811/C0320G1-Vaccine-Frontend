import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';

const routes: Routes = [
  { path: "employee-list", component: EmployeeListComponent },
  { path: "injected-list", component: PeriodicInjectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
