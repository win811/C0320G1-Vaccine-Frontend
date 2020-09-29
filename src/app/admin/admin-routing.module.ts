import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactBoxComponent} from './contact-box/contact-box.component';
import {ContactReplyComponent} from './contact-reply/contact-reply.component';

const routes: Routes = [{
  path: '', component: ContactBoxComponent
},
  {path: 'contact/:id', component: ContactReplyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
