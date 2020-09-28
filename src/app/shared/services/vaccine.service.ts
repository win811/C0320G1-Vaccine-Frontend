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
}
