import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../models/dto/page';
import {InjectionHistory} from '../models/InjectionHistory';

@Injectable({
  providedIn: 'root'
})
export class InjectionHistoryService {
  private readonly URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getInjectionHistoryHttpOptions(page: number): Object {

    let injectionHistory = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        page: page
      }
    };
    return injectionHistory;
  }

  getInjectionHistory(accountId: number, page: number): Observable<Page<InjectionHistory>> {
    return this.http.get<Page<InjectionHistory>>(this.URL + "/account/" + accountId,this.getInjectionHistoryHttpOptions(page))
  }
}
