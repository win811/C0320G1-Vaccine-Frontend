import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './../models/page';
import { Transaction } from '../models/transaction-patient';
import { Vaccine } from '../models/Vaccine';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly API_URL = 'http://localhost:8080/api/v1';
  constructor(
    private http: HttpClient
  ) { }

  // Duy
  getTransactionWithPatient(pageNumber: number, searchObj: any): Observable<Page<Transaction>> {
    let parm: HttpParams = new HttpParams();
    parm = parm.append("vaccineId", searchObj.vaccineId);
    parm = parm.append("accountName", searchObj.accountName);
    parm = parm.append("page", pageNumber.toString());
    // debugger
    return this.http.get<Page<Transaction>>(`${this.API_URL}/admin/transaction/patient`, { params: parm });
  }

  // Duy
  updateTransactionWithPatient(trans: Transaction): Observable<any> {
    return this.http.put(`${this.API_URL}/admin/transaction/patient`, trans);
  }

  // Duy
  delTransactionWithPatient(transactionId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/admin/transaction/patient`, { params: { id: transactionId } });
  }

  //Duy
  getAllVaccine(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.API_URL}/admin/vaccine`);
  }

}
