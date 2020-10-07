import { ReplyComponent } from './injection-history/reply/reply.component';

import {GuestLayoutComponent} from './guest-layout/guest-layout.component';
import {AccountLayoutComponent} from './account-layout/account-layout.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {TableVacxinComponent} from './table-vacxin/table-vacxin.component';
import {RegistrationVaccinationComponent} from './registration-vaccination/registration-vaccination.component';
import {InjectionHistoryComponent} from './injection-history/injection-history.component';
import {DailyScheduleComponent} from '../home/daily-schedule/daily-schedule.component';
import {UserGuard} from '../shared/services/user.guard';

const routes: Routes = [

  {
    path: '', component: AccountLayoutComponent, children: [

      {path: 'injection-history', component: InjectionHistoryComponent},
      {path: 'registration', component: RegistrationVaccinationComponent},
      {
        path: 'injection-history/reply/:id', component: ReplyComponent
      },
    ]
  },

  {
    path: 'guest', component: GuestLayoutComponent, children: [
      {path: 'daily', component: DailyScheduleComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'vacxin', component: TableVacxinComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
