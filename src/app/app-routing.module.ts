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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
