import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from '../home/body/body.component';
import {ListDailyScheduleComponent} from './daily-schedule/list-daily-schedule/list-daily-schedule.component';

const routes: Routes = [{
  path: 'dailySchedule', component: ListDailyScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
