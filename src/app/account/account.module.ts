import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterInjectScheduleComponent } from './register-inject-schedule/register-inject-schedule.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmRegisterComponent } from './register-inject-schedule/confirm-register/confirm-register.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AccountModule { }
