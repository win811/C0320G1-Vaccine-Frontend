import { FormGroup } from '@angular/forms';

import { Employee } from './../models/employee';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../models/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getOptions(page?: number, code?: string, fullName?: string, position?: string): Object {
    let options = {
      header: this.httpOption,
      params: {
        page: page,
        code: code,
        fullName: fullName,
        position: position
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

  constructor(private httpClient: HttpClient) { }

  private readonly API_URL = "http://localhost:8080/api/v1/employee"

  getListEmployee(page?: number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL, this.getOptions(page));
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_URL + '/create', employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.API_URL + '/update', employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + `/delete/${id}`);
  }

  getSearchEmployee(page: number, searchForm: FormGroup): Observable<Page<Employee>> {
    return this.httpClient.get<Page<Employee>>(this.API_URL + '/search',
      this.getOptions(page, searchForm.value.code, searchForm.value.fullName, searchForm.value.position))
  }


}
