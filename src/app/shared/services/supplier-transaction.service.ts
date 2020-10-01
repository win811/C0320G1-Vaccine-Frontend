import { Observable } from 'rxjs';
import { TransactionField } from './../models/dto/Trans-sup-searchField';
import { SupplierTransaction } from './../models/SupplierTransaction';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../models/page';

@Injectable({ 
  providedIn: 'root'
})
export class SupplierTransactionService {

  private readonly ADMIN_URL = "http://localhost:8080/api/v1/admin/supplier-transaction";

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json'
  };
  constructor(private http: HttpClient) { }

  private getTransHttpOptions(trans: TransactionField, page: number): Object {

    let myTransOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        tradingCode: trans.tradingCode,
        vaccinceCode: trans.vaccineCode,
        billCode: trans.billCode,
        vaccineType: trans.vaccineType,
        supplier: trans.supplier,
        page: page
      }
    };
    return myTransOptions;

  }

  getOnePage(supplier: TransactionField, page: number): Observable<Page<SupplierTransaction>>{
    return this.http.get<Page<SupplierTransaction>>(`${this.ADMIN_URL}`, this.getTransHttpOptions(supplier, page));
  }

  getAllTrans(): Observable<any>{
    return this.http.get(`${this.ADMIN_URL}`);
  }

  createNewTrans(trans: any): any{
    return this.http.post<any>(`${this.ADMIN_URL}/create`,trans, this.options);
  }
  getTransById(id: number): Observable<any> {
    return this.http.get<any>(`${this.ADMIN_URL}/get/${id}`, this.options);
  }

  updateTrans(id: number, value: any): Observable<any> {
    return this.http.put(`${this.ADMIN_URL}/update/${id}`, JSON.stringify(value), this.options);
  }

  deleteTrans(idDelete: number): Observable<any> {
    return this.http.put<any>(`${this.ADMIN_URL}/delete/${idDelete}`, this.options);
  }
}
