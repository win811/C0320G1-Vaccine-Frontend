import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactReplyService {
  private readonly API_URL_CONTACT = 'http://localhost:8080/api/v1/contact';

  constructor(private http: HttpClient) {
  }

  addNewContactReply(contactReply, id): Observable<any> {
    const link = this.API_URL_CONTACT + '/reply/' + id;
    return this.http.post(link, contactReply);
  }
}
