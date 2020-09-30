import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vaccine } from './../../../../shared/models/Vaccine';
import { TRANSACTION_MESSAGE, validDate, validNumber } from './../../../../shared/validations/custom-validators';
import { Transaction } from './../../../../shared/models/transaction-patient';
import { TransactionService } from './../../../../shared/services/transaction.service';

@Component({
  selector: 'app-trans-edit',
  templateUrl: './trans-edit.component.html',
  styleUrls: ['./trans-edit.component.css']
})
export class TransEditComponent implements OnInit {

  errorList = TRANSACTION_MESSAGE;
  vaccineList: Vaccine[];
  editForm: FormGroup;
  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TransEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

    this.transactionService.getAllVaccine().subscribe(data => {
      this.vaccineList = data;
    });

    this.editForm = this.fb.group({
      vaccineId: [{ value: `MGD-${this.data.id}`, disabled: true }, [Validators.required]],
      category: [this.data.vaccine.id, [Validators.required]],
      amount: [this.data.amount, [Validators.required, Validators.min(1), validNumber]],
      transactionDate: [this.data.transactionDate, [Validators.required, validDate]],
      price: [{ value: this.data.amount * this.data.vaccine.price, disabled: true }]
    });
  }

  changePrice() {
    const vaccinePrice = this.vaccineList.find(val => val.id == this.category.value);
    this.editForm.patchValue({
      price: +this.amount.value * +vaccinePrice.price
    })
  }

  save() {
    if (this.category.value != this.data.vaccine.id) {
      this.data.vaccine = this.vaccineList.find(val => val.id == this.category.value);
    }
    if (this.amount.value != this.data.amount) {
      this.data.amount = this.amount.value;
    }
    if (this.transactionDate.value != this.data.transactionDate) {
      this.data.transactionDate = this.transactionDate.value;
    }
    this.transactionService.updateTransactionWithPatient(this.data as Transaction).subscribe(() => {
      this.dialogRef.close(this.data);
    })
  }

  get vaccineId() {
    return this.editForm.get('vaccineId');
  }

  get category() {
    return this.editForm.get('category');
  }

  get amount() {
    return this.editForm.get('amount');
  }

  get transactionDate() {
    return this.editForm.get('transactionDate');
  }
}
