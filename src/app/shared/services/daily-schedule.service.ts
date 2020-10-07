import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DailySchedule} from '../models/DailySchedule';
import {Observable} from 'rxjs';
import {Page} from '../models/dto/page';
import {ContactReply} from '../models/ContactReply';

@Injectable({
  providedIn: 'root'
})
export class DailyScheduleService {
  private baseUrl = 'http://localhost:8080/api/v1/admin/dailySchedule';
  private baseUrl2 = 'http://localhost:8080/api/v1/admin/dailySchedule/listInject';
  private url = 'http://localhost:8080/api/v1/dailyschedule';
  private url_1 = 'http://localhost:8080/api/v1/info-vaccine';

  constructor(private http: HttpClient) {
  }

  page(nameVaccine, status, startDay, endDay, page): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.baseUrl + '?nameVaccine=' + nameVaccine + '&&status=' + status + '&&startDay=' + startDay + '&&endDay=' + endDay + '&&page=' + page);
  }

  pageListInject(id, page): Observable<any> {
    return this.http.get(this.baseUrl2 + '?id=' + id + '&&page=' + page);
  }

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

  getDailySchedule(page: number): Observable<Page<DailySchedule>> {
    return this.http.get<Page<DailySchedule>>(`${this.url}`, this.getPassengerCheckinHttpOptions(page));
  }

  getInfoDailyVaccine(id: number): Observable<DailySchedule> {
    return this.http.get<DailySchedule>(`${this.url_1}/${id}`);

  }
}
