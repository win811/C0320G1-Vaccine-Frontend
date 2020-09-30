import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';

const routes: Routes = [
  {
    path: "", component: AdminLayoutComponent, children: [
      { path: "employee-list", component: EmployeeListComponent },
      { path: "injected-list", component: PeriodicInjectionComponent }]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
