import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from '../models/Vaccine';
import { Page } from '../models/dto/page';
import { SearchVaccine } from '../../admin/vaccine-storage/vaccine-storage.component';


@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private readonly URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getVaccineStorageOptions(name: string, category: string, country: string,
    inventoryStatus: string, page: number): Object {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        name,
        category,
        country,
        inventoryStatus,
        page
      }
    }
    return options;
  }

  getExportVaccineOptions(id: number, exportAmount: number): Object {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        id,
        exportAmount
      }
    }
    return options;
  }

  getVaccineStorage(searchVaccine: SearchVaccine, page: number): Observable<Page<Vaccine>> {

    return this.http.get<Page<Vaccine>>(this.URL + '/vaccine-storage',
      this.getVaccineStorageOptions(searchVaccine.name.trim(), searchVaccine.category.trim(),
        searchVaccine.country.trim(), searchVaccine.inventoryStatus.trim(), page));

  }

  exportVaccine(id: number, exportAmount: number): Observable<Vaccine> {
    return this.http.put<Vaccine>(this.URL + '/export-vaccine', null, this.getExportVaccineOptions(id, exportAmount))
  }
}
