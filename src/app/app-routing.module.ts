import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyScheduleComponent} from './home/daily-schedule/daily-schedule.component';

const routes: Routes = [
  {
    path: '', component: DailyScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
