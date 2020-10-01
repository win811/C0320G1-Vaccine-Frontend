import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {TableVacxinComponent} from './table-vacxin/table-vacxin.component';

const routes: Routes = [{
  path: '', component: ContactComponent
},{
  path: 'vacxin', component: TableVacxinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
