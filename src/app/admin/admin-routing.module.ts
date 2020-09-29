import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VaccineListComponent} from './vaccine-list/vaccine-list.component';

const routes: Routes = [
  {path: 'vaccine-list', component: VaccineListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
