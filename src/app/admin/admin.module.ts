import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [VaccineListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
