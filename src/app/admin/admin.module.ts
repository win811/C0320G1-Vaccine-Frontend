import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { ImportVaccineComponent } from './import-vaccine/import-vaccine.component';
import { ExportVaccineComponent } from './export-vaccine/export-vaccine.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';

@NgModule({
  declarations: [VaccineStorageComponent, ImportVaccineComponent, ExportVaccineComponent, AdminCenterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
