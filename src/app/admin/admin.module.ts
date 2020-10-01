import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { ListDailyScheduleComponent } from './daily-schedule/list-daily-schedule/list-daily-schedule.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListInjectComponent } from './daily-schedule/list-inject/list-inject.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { ListPatientRequestComponent } from './patient-request-inject/list-patient-request/list-patient-request.component';


@NgModule({
  declarations: [ListDailyScheduleComponent, ListInjectComponent, ListPatientRequestComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [
    ListInjectComponent
  ]
})
export class AdminModule { }
