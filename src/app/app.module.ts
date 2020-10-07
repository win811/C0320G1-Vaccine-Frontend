import { AccountModule } from './account/account.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTooltipModule} from '@angular/material';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { DailyScheduleComponent } from './home/daily-schedule/daily-schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";
import {RegisterInjectScheduleComponent} from "./account/register-inject-schedule/register-inject-schedule.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmRegisterComponent} from "./account/register-inject-schedule/confirm-register/confirm-register.component";

import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './security/Login/Login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SiginComponent } from './security/sigin/sigin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DailyScheduleComponent,
    RegisterInjectScheduleComponent,
    ConfirmRegisterComponent,
    LoginComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AccountModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxPaginationModule,


  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent,RegisterInjectScheduleComponent,ConfirmRegisterComponent]
})
export class AppModule {
}
