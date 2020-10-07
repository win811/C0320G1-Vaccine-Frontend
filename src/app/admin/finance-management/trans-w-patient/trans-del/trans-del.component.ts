import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TransactionService } from './../../../../shared/services/transaction.service';

@Component({
  selector: 'app-trans-del',
  templateUrl: './trans-del.component.html',
  styleUrls: ['./trans-del.component.css']
})
export class TransDelComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<TransDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  delete() {
    this.transactionService.delTransactionWithPatient(this.data.code).subscribe(res => {
      this.dialogRef.close(this.data.id);
    });
  }
}
