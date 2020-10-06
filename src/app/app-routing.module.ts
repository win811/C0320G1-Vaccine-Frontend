
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from './home/body/body.component';
import {DailyScheduleComponent} from './home/daily-schedule/daily-schedule.component';

const routes: Routes = [
  {
    path: 'daily-schedule', component: DailyScheduleComponent
  },
  {
    path: '', component: BodyComponent
  },
  {
  path: 'contact', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
