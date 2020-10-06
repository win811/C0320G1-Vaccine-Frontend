import {AppModule} from './../app.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {AccountRoutingModule} from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {GuestLayoutComponent} from './guest-layout/guest-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    GuestLayoutComponent
  ],
  imports: [
    CommonModule,
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
    AdminModule,
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
    })
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class AccountModule {
}
