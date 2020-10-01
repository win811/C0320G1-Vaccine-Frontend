import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyScheduleService {
  private baseUrl = 'http://localhost:8080/api/v1/admin/dailySchedule';
  private baseUrl2 = 'http://localhost:8080/api/v1/admin/dailySchedule/listInject';

  constructor(private http: HttpClient) { }

  page(nameVaccine, status, startDay, endDay, page): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.baseUrl + '?nameVaccine=' + nameVaccine + '&&status=' + status + '&&startDay=' + startDay + '&&endDay=' + endDay + '&&page=' + page);
  }

  pageListInject(id, page): Observable<any> {
    return this.http.get(this.baseUrl2 + '?id=' + id + '&&page=' + page);
  }

}
