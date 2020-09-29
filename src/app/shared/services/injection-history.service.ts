import { InjectionHistoryDTO } from './../models/dto/injectionHistoryDTO';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Page } from '../models/page';


@Injectable({
  providedIn: 'root'
})
export class InjectionHistoryService {

  getOptions(page?: number, fullName?: string, injected?: string): Object {
    let options = {
      header: this.httpOption,
      params: {
        page: page,
        fullName: fullName,
        injected: injected
      }
    }
    return options;
  }

  httpOption = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  }
  private readonly API_URL = "http://localhost:8080/api/v1/injection-list"
  constructor(private httpClient: HttpClient) { }

  // Quân
  getSearchInjection(page: number, searchForm: FormGroup): Observable<Page<InjectionHistoryDTO>> {
    return this.httpClient.get<Page<InjectionHistoryDTO>>(this.API_URL,
      this.getOptions(page, searchForm.value.fullName, searchForm.value.injected))
  }
}
