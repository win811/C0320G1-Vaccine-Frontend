import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'contact', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
