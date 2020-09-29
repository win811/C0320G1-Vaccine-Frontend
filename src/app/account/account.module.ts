import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class AccountModule { }
