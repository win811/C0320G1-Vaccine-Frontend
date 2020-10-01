import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InjectRequestService {
  private baseUrl = 'http://localhost:8080/api/v1/admin/patientInjectRequest';

  constructor(private http: HttpClient) {
  }
  page(namePatient, isInject, type, page): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.baseUrl + '?namePatient=' + namePatient + '&&isInject=' + isInject + '&&type=' + type + '&&page=' + page);
  }

  getPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePatient(id: any, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
