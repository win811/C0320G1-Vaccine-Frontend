import { CreateTransactionComponent } from './supplier-transaction/create-transaction/create.component';
import { EditTransactionComponent } from './supplier-transaction/edit-transaction/edit.component';
import { SupplierTransactionComponent } from './supplier-transaction/supplier-transaction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'supplier-transaction',component : SupplierTransactionComponent,
  },
  {
    path: 'supplier-transaction/create', component: CreateTransactionComponent
  },
  {
    path: 'supplier-transaction/edit', component: EditTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
