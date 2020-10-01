import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../../shared/models/transaction-patient';
import { FormGroup, FormBuilder } from '../../../../../../node_modules/@angular/forms';
import { TransactionService } from './../../../../shared/services/transaction.service';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TransEditComponent } from '../trans-edit/trans-edit.component';
import { TransDelComponent } from './../trans-del/trans-del.component';

@Component({
  selector: 'app-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.css']
})
export class TransListComponent implements OnInit {

  searchForm: FormGroup
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;
  transactionList: Transaction[];

  // search object
  private searchObj: any = {};

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.searchObj = {
      vaccineId: "",
      accountName: ""
    };
    this.searchForm = this.fb.group({
      vaccineId: [""],
      accountName: [""],
    });
    console.log("vào")
    this.getPage(1);
  }

  search() {
    this.searchObj = this.searchForm.value;
    this.getPage(1);
  }

  edit(id) {
    const dialogRef = this.dialog.open(TransEditComponent, {
      width: "550px",
      height: "450px",
      data: this.transactionList[id]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel") return;
      // const id = this.transactionList.findIndex(tran => tran.id == result.id)
      this.transactionList[id] = result;
    });
  }

  del(i) {
    const dialogRef = this.dialog.open(TransDelComponent, {
      width: "550px",
      height: "230px",
      data: { code: this.transactionList[i].id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "cancel") return;
      this.transactionList.splice(i, 1);
    });
  }
  // Duy
  getPage(page: number) {
    this.transactionService.getTransactionWithPatient(page, this.searchObj).pipe(
      tap(res => {
        if (res != null) {
          this.totalElements = res.totalElements;
          this.pageSize = res.size;
          this.currentPage = page;
        } else {
          this.totalElements = 1;
          this.pageSize = 1;
          this.currentPage = 1;
        }
      }),
      map(res => {
        return res != null ? res.content : [];
      })
    ).subscribe((data) => {
      this.transactionList = data;
    });
  }
}
