import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './../models/page';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly API_URL = "";
  constructor(
    private http: HttpClient
  ) { }

  getTransactionWithPatient(): Observable<Page<Transaction>> {
    return this.http.get<Page<Transaction>>(`${this.API_URL}`);
  }


  editTransactionWithPatient(trans: Transaction): Observable<any> {
    return this.http.put(`${this.API_URL}`, trans);
  }

  delTransactionWithPatient(transactionId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}`, { params: { id: transactionId } });
  }

}
