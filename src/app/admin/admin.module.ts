import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierTransactionComponent } from './supplier-transaction/supplier-transaction.component';
import { CreateComponent } from './supplier-transaction/create/create.component';
import { EditComponent } from './supplier-transaction/edit/edit.component';

@NgModule({
  declarations: [SupplierTransactionComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
