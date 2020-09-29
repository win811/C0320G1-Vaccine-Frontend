import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { InjectionHistoryComponent } from './injection-history/injection-history.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ContactComponent, InjectionHistoryComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AccountModule { }
