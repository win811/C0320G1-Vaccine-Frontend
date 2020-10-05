import { VaccineStorageComponent } from './vaccine-storage/vaccine-storage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { ContactReplyComponent } from './contact-reply/contact-reply.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';
import { TransCenterComponent } from './finance-management/trans-center/trans-center.component';
import { TransListComponent } from './finance-management/trans-w-patient/trans-list/trans-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {ListDailyScheduleComponent} from './daily-schedule/list-daily-schedule/list-daily-schedule.component';
import {ListPatientInjectRequestComponent} from './patient-inject/list-patient-inject-request/list-patient-inject-request.component';

import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
    {
      path: '', component: AdminLayoutComponent, children: 
      [
        {path: "employee-list", component: EmployeeListComponent },
      {path: "injected-list", component: PeriodicInjectionComponent },
      {path: 'vaccine-storage',component: VaccineStorageComponent},
      {path: 'contactBox', component: ContactBoxComponent},
      {path: 'contact/noti', component: NotificationsComponent},
      {path: 'contact/:id', component: ContactReplyComponent},
      {path: 'dailySchedule', component: ListDailyScheduleComponent},
      {path: 'listPatientInjectRequest', component: ListPatientInjectRequestComponent},
      {path: "finance", component: TransCenterComponent,
          children: [
            { path: "patient", component: TransListComponent }
          ]
      }
      ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
