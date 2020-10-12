import {AppModule} from './../app.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InjectionHistoryComponent} from './injection-history/injection-history.component';
import {ToastrModule} from 'ngx-toastr';
import {TableVacxinComponent} from './table-vacxin/table-vacxin.component';
import {AccountLayoutComponent} from './account-layout/account-layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AdminModule} from '../admin/admin.module';
import {RegistrationVaccinationComponent} from './registration-vaccination/registration-vaccination.component';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatProgressBarModule,
  MatRadioModule, MatSelectModule,
  MatStepperModule,
} from '@angular/material';
import {GuestLayoutComponent} from './guest-layout/guest-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DailyScheduleComponent} from '../home/daily-schedule/daily-schedule.component';
import {RegisterInjectScheduleComponent} from './register-inject-schedule/register-inject-schedule.component';
import {ConfirmRegisterComponent} from './register-inject-schedule/confirm-register/confirm-register.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ContactComponent,
    AccountLayoutComponent,
    FooterComponent,
    HeaderComponent,
    TableVacxinComponent,
    RegistrationVaccinationComponent,
    GuestLayoutComponent,
    InjectionHistoryComponent,
    DailyScheduleComponent,
    RegisterInjectScheduleComponent,
    ConfirmRegisterComponent,
  ],
  imports: [
    CommonModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    MatNativeDateModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    NgxPaginationModule,
    // AdminModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  entryComponents: [RegisterInjectScheduleComponent, ConfirmRegisterComponent]
})
export class AccountModule {
}
