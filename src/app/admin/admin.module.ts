import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { ContactReplyComponent } from './contact-reply/contact-reply.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {CdkVirtualScrollViewport, ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [ContactBoxComponent, ContactReplyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    ScrollingModule,
  ]
})
export class AdminModule { }
