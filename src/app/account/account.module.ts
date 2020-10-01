import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { TableVacxinComponent } from './table-vacxin/table-vacxin.component';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AdminModule} from '../admin/admin.module';
import { RegistrationVaccinationComponent } from './registration-vaccination/registration-vaccination.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';


@NgModule({
  declarations: [
    ContactComponent,
    AccountLayoutComponent,
    FooterComponent,
    HeaderComponent,
    TableVacxinComponent,
    RegistrationVaccinationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
    AdminModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  exports : [
    FooterComponent,
    HeaderComponent
  ]
})
export class AccountModule { }
