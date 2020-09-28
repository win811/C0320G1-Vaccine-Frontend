import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '',component : AdminCenterComponent, children : [
    {path: 'vaccine-storage',component: VaccineStorageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
