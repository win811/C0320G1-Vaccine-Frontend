import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { ContactReplyComponent } from './contact-reply/contact-reply.component';
import { MatSliderModule } from '@angular/material/slider';
import {CdkVirtualScrollViewport, ScrollingModule} from '@angular/cdk/scrolling';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransCenterComponent } from './finance-management/trans-center/trans-center.component';
import { TransListComponent } from './finance-management/trans-w-patient/trans-list/trans-list.component';
import { TransEditComponent } from './finance-management/trans-w-patient/trans-edit/trans-edit.component';
import { PeriodicInjectionComponent } from './injection/periodic-injection/periodic-injection.component';

@NgModule({
  declarations: [ContactBoxComponent,EmployeeListComponent, EmployeeCreateComponent,ContactReplyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    ScrollingModule,



  ],
  entryComponents: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent
  ],
})
export class AdminModule { }
