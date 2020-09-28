<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyScheduleComponent} from './home/daily-schedule/daily-schedule.component';

const routes: Routes = [
  {
    path: '', component: DailyScheduleComponent
  }
];
=======
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from './home/body/body.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
  path: 'contact', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
}];
>>>>>>> cf494f97d2e2f44ffeba7f427a778cb8f662e9f6

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
