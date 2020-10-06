import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { DailyScheduleComponent } from './home/daily-schedule/daily-schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";
import {RegisterInjectScheduleComponent} from "./account/register-inject-schedule/register-inject-schedule.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {ConfirmRegisterComponent} from "./account/register-inject-schedule/confirm-register/confirm-register.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DailyScheduleComponent,
    RegisterInjectScheduleComponent,
    ConfirmRegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        // MatSliderModule
    ],
  entryComponents: [RegisterInjectScheduleComponent,ConfirmRegisterComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
