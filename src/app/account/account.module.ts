import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { InjectionHistoryComponent } from './injection-history/injection-history.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastrModule} from 'ngx-toastr';
import { ReplyComponent } from './injection-history/reply/reply.component';

@NgModule({
  declarations: [ContactComponent, InjectionHistoryComponent, ReplyComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ]
})
export class AccountModule { }
