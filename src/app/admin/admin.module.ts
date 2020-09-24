import { CreateTransactionComponent } from './supplier-transaction/create-transaction/create.component';
import { SupplierTransactionComponent } from './supplier-transaction/supplier-transaction.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { EditTransactionComponent } from './supplier-transaction/edit-transaction/edit.component';

@NgModule({
  declarations: [
    SupplierTransactionComponent,
    CreateTransactionComponent,
    EditTransactionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
