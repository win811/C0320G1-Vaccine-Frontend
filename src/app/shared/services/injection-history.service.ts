import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../models/dto/page';
import {InjectionHistory} from '../models/InjectionHistory';
import { InjectionHistoryDTO } from './../models/dto/injectionHistoryDTO';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InjectionHistoryService {
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
  getInjectionHistory(patientId: number, page: number): Observable<Page<InjectionHistory>> {
    return this.http.get<Page<InjectionHistory>>(this.URL + "/account/injection-history/" + patientId, this.getInjectionHistoryHttpOptions(page));
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


  // Quân
  getSearchInjection(page: number, searchForm: FormGroup): Observable<Page<InjectionHistoryDTO>> {
    return this.httpClient.get<Page<InjectionHistoryDTO>>(this.API_URL,
      this.getOptions(page, searchForm.value.fullName, searchForm.value.injected))
  }
}
