import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly API_URL_CONTACT = 'http://localhost:8080/api/v1/contact';

  constructor(private  http: HttpClient) {
  }

  addNewContact(contact): Observable<any> {
    const link = this.API_URL_CONTACT;
    return this.http.post(link, contact);
  }

  getAllContact(page): Observable<any> {
    const link = this.API_URL_CONTACT + '?page=' + page + '&size=' + 10;
    return this.http.get(link);
  }

  getContactById(id): Observable<any> {
    const link = this.API_URL_CONTACT + '/' + id;
    return this.http.get(link);
  }
}
