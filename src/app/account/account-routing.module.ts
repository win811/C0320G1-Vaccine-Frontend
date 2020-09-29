import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {InjectionHistoryComponent} from './injection-history/injection-history.component';

const routes: Routes = [{
  path: '', component: ContactComponent
},
  {
    path: 'injection-history', component: InjectionHistoryComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
