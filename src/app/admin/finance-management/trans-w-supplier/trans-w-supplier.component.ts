import { TransactionField } from './../../../shared/models/dto/Trans-sup-searchField';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { SupplierTransactionService } from './../../../shared/services/supplier-transaction.service';
import { SupplierTransaction } from './../../../shared/models/SupplierTransaction';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-trans-w-supplier',
  templateUrl: './trans-w-supplier.component.html',
  styleUrls: ['./trans-w-supplier.component.css']
})
export class TransWSupplierComponent implements OnInit {

  transaction: SupplierTransaction[];
  transactionList$: Observable<SupplierTransaction[]>;
  lastPage: number;
  addForm: FormGroup;
  addTrans: FormArray;
  private searchField: TransactionField = {} as TransactionField;
  totalElements: number;
  pageSize: number;
  currentPage: number;
  stt: number[];
  isEmpty: boolean = false;
  createForm: FormGroup;
  deleteTransaction: SupplierTransaction;
  constructor(
    private transService: SupplierTransactionService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      items: [null],
      item_value: ['no']
    });
    this.addTrans = this.fb.array([]);
  }

  ngOnInit() {
    this.addForm.addControl('rows', this.addTrans);
    this.getAllTrans();
    this.reloadData(1);
    this.createForm = new FormGroup({
      tradingCode: new FormControl(''),
      vaccineCode: new FormControl(''),
      vaccineType: new FormControl(''),
      billCode: new FormControl(''),
      supplier: new FormControl(''),
    })
  }

  getAllTrans() {
    this.transService.getAllTrans().subscribe(
      (data: SupplierTransaction[]) => this.transaction = data
    )
  }

  reloadData(pageNumber: number) {
    this.transactionList$ = this.transService.getOnePage(this.searchField, pageNumber).pipe(
      tap(res => {
        console.log(res)
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.stt = [];
        let firstIndex = this.pageSize * (this.currentPage - 1) + 1;
        let lastIndeex = this.pageSize * this.currentPage;
        for (let i = firstIndex; i <= lastIndeex; i++) {
          this.stt.push(i);
        }

        this.isEmpty = false;
        if (res.content.length == 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log("vào được err của tap");
      }),
      map(res => res.content)
    );
  }

  search() {
    this.searchField = this.createForm.value as TransactionField;
    console.log(this.searchField);
    this.reloadData(1);

  }
  deleteTrans(id: number) {
    this.transService.deleteTrans(id).subscribe(
      (data) => { 
        this.transaction = this.transaction.filter((s) => {
          return s.id !== this.deleteTransaction.id;
        });
        
      }     
      // , error => { this.errorMessage = "Xóa thất bại" }, () => {
      //   if (this.errorMessage.length == 0) {
      //     this.message = "Xóa thành công";
      //   }
      // }
    );
  }
  selectDeletedTrans(service: SupplierTransaction) {
    this.deleteTransaction = service;
    console.table(service);
  }
  reloadPage(){
    this.ngOnInit();
  }

}
