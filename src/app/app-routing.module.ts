import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import {NotificationsComponent} from './admin/notifications/notifications.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
