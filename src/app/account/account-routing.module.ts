import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {TableVacxinComponent} from './table-vacxin/table-vacxin.component';
import {RegistrationVaccinationComponent} from './registration-vaccination/registration-vaccination.component';

const routes: Routes = [
  
  { path: '', component: AccountLayoutComponent, children : [
      
    ]
  },
  { path:'guest', component : GuestLayoutComponent, children : [
    { path:'contact', component : ContactComponent },
    { path:'vacxin', component: TableVacxinComponent },
    { path:'registration', component: RegistrationVaccinationComponent },
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
