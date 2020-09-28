import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '',component : AdminCenterComponent, children : [
    {path: 'vaccine-storage',component: VaccineStorageComponent},
    { path: "employee-list", component: EmployeeListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
