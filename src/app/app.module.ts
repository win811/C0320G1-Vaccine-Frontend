import { AccountModule } from './account/account.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTooltipModule} from '@angular/material';
import { BodyComponent } from './home/body/body.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './security/Login/Login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SiginComponent } from './security/sigin/sigin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {HeaderComponent} from './account/header/header.component';
// import {FooterComponent} from './account/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    BodyComponent,
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
  entryComponents: [LoginComponent]
})
export class AppModule {
}
