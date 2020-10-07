import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PatientSearchDTO} from '../models/dto/patientSearchDTO';
import {Observable} from 'rxjs';
import {Page} from '../models/dto/page';
import {Vaccine} from '../models/Vaccine';
import {Patient} from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // Thành Long
  getPatientHttpOptions(searchField: PatientSearchDTO, page: number): Object {
    const vaccine = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        code: searchField.code,
        fullName: searchField.fullName,
        page
      }
    };
    return vaccine;
  }

  // Thành Long
  getPatient(searchField: PatientSearchDTO, page: number): Observable<Page<Patient>> {
    return this.http.get<Page<Patient>>(`${this.URL}/admin/patient-list`, this.getPatientHttpOptions(searchField, page));
  }

  // Thành Long
  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.URL + '/admin/patient-list/update', patient);
  }

  // Thành Long
  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.URL + '/admin/patient-list/create',patient);
  }

  // Thành Long
  deletePatient(id: number): Observable<any> {
    return this.http.delete(this.URL + `/admin/patient-list/delete/${id}`);
  }
}
