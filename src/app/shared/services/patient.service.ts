import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Patient} from "../models/Patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  private url = 'http://localhost:8080/api/v1/create-patient';
  private url1 = 'http://localhost:8080/api/v1/injection-add-history';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getPassengerCheckinHttpOptions(page: number): Object {
    const Patient = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        page
      }
    };
    return Patient;
  }

  getaddPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.url}`, patient)
  }

  registerPatient(id: number, vaccineId, accountId , injectionDate): Observable<any> {
    return this.http.get(this.url1 + '?id=' +id+  '&&vaccineId=' +vaccineId+'&&accountId='+ accountId+'&&injectionDate='+ injectionDate);
  }
}
