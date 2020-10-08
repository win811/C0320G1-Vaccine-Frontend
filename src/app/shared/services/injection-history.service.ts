import {InjectionHistoryDTO} from './../models/dto/injectionHistoryDTO';
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Page} from '../models/page';
import {InjectionHistory} from '../models/InjectionHistory';

@Injectable({
  providedIn: 'root'
})
export class InjectionHistoryService {
  private readonly API_URL_REG = 'http://localhost:8080/api/v1/injection';

  private readonly URL = 'http://localhost:8080/api/v1';
  private readonly API_URL = "http://localhost:8080/api/v1/injection-list";

  constructor(private http: HttpClient,
              private httpClient: HttpClient) { }

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

  // Thành Long
  getInjectionHistory(accountId: number, page: number): Observable<Page<InjectionHistory>> {
    return this.http.get<Page<InjectionHistory>>(this.URL + "/account/injection-history/" + accountId, this.getInjectionHistoryHttpOptions(page));
  }
  sendVerifyToken(email): Observable<any> {
    const link = this.API_URL_REG + '/verify';
   return  this.httpClient.post(link, email);
  }

  getOptions(page?: number, fullName?: string, injected?: string): Object {
    let options = {
      header: this.httpOption,
      params: {
        page: page,
        fullName: fullName,
        injected: injected
      }
    };
    return options;
  }

  httpOption = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  // CREATE BY ANH DUC
  RegistrationHistory(injectionHistory): Observable<any> {
    const link = this.API_URL_REG + '/registration';
    return this.httpClient.post(link, injectionHistory);
  }

  // Quân
  getSearchInjection(page: number, searchForm: FormGroup): Observable<Page<InjectionHistoryDTO>> {
    return this.httpClient.get<Page<InjectionHistoryDTO>>(this.API_URL,
      this.getOptions(page, searchForm.value.fullName, searchForm.value.injected));
  }

  //Tùng
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json'
  };

  //Tùng
  getInjection(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/account/injection-history/get/${id}`, this.options);
  }

  //Tùng
  replyInjection(id: number, value: any): Observable<any> {
    return this.http.put(`${this.URL}/account/injection-history/reply/${id}`, JSON.stringify(value), this.options);
  }
  getVaccine(): Observable<any> {
    return this.http.get(this.URL + `/account/injection-history/vaccine`, this.options);
  }

  getPatient(): Observable<any> {
    return this.http.get(this.URL + `/account/injection-history/patient`, this.options);
  }
  getAccount(): Observable<any> {
    return this.http.get(this.URL + `/account/injection-history/account`, this.options);
  }
}
