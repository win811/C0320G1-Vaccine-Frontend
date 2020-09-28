import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DailySchedule} from '../models/DailySchedule';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyScheduleService {
  private url = 'http://localhost:8080/api/v1/promotion';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:ban-types
  getPassengerCheckinHttpOptions(page: number): Object {
    const dailySchedule = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        page
      }
    };
    return dailySchedule;
  }

  getDailySchedule( page: number): Observable<Page<DailySchedule>> {
    return this.http.get<Page<CustomerCheckinDto>>(`${this.API_URL}/customer-checkin-list`, this.getPassengerCheckinHttpOptions(searchField, page));
  }

}
