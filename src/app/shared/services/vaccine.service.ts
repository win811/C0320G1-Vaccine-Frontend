import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vaccine} from '../models/Vaccine';
import {Page} from '../models/dto/page';
import {VaccineSearchDTO} from '../models/dto/vaccineSearchDTO';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private readonly URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getVaccineHttpOptions(searchField: VaccineSearchDTO, page: number): Object {
    const vaccine = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        code: searchField.code,
        category: searchField.category,
        country: searchField.country,
        minPrice: searchField.minPrice,
        maxPrice: searchField.maxPrice,
        page
      }
    };
    return vaccine;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getVaccine(searchField: VaccineSearchDTO, page: number): Observable<Page<Vaccine>> {
    return this.http.get<Page<Vaccine>>(`${this.URL}/admin/vaccine-list`, this.getVaccineHttpOptions(searchField, page));
  }

  updateVaccine(id: number, value: any): Observable<Vaccine>{
    return this.http.put<Vaccine>(`${this.URL}/admin/vaccine-list/${id}`,value,this.httpOptions)
  }

  getVaccineById(id: number): Observable<Vaccine>{
    return this.http.get<Vaccine>(`${this.URL}/admin/vaccine/${id}`,this.httpOptions)
  }
}
