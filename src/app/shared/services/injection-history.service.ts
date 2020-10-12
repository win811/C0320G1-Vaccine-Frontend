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
  private readonly API_URL_DUC = 'http://localhost:8080/api/v1';

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
        page: page - 1
      }
    };
    return injectionHistory;
  }

  // Thành Long
  getInjectionHistory(accountId: number, page: number): Observable<Page<InjectionHistory>> {
    return this.http.get<Page<InjectionHistory>>(this.URL + "/account/injection-history/" + accountId, this.getInjectionHistoryHttpOptions(page));
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
    const link = this.API_URL_DUC + '/injection/registration';
    return this.httpClient.post(link, injectionHistory);
  }
  // CREATE BY ANH DUC
  sendVerifyToken(email): Observable<any> {
    const link = this.API_URL_DUC + '/injection/verify';
    return  this.httpClient.post(link, email);
  }
  // CREATE BY ANH DUC
  verifyCode(patient): Observable<any> {
    const link = this.API_URL_DUC + '/injection/verifyCode';
    return  this.httpClient.post(link,patient);
  }
  // Quân
  getSearchInjection(page: number, searchForm: FormGroup): Observable<Page<InjectionHistoryDTO>> {
    return this.httpClient.get<Page<InjectionHistoryDTO>>(this.API_URL,
      this.getOptions(page, searchForm.value.fullName, searchForm.value.injected));
  }
}
