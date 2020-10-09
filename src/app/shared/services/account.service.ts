import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from './TokenStorageService';
import {JwtResponse} from '../models/dto/jwt-response';


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private readonly API_URL_ACCOUNT_REGISTER = 'http://localhost:8080/api/v1/register';
  private readonly API_URL_ACCOUNT_LOGIN = 'http://localhost:8080/api/v1/login';

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorageService) {
  }

  createNewAccount(account): Observable<any> {
    const link1 = this.API_URL_ACCOUNT_REGISTER;
    return this.http.post(link1, account);
  }

  login(login): Observable<JwtResponse> {
    const link2 = this.API_URL_ACCOUNT_LOGIN;
    return this.http.post<JwtResponse>(link2, login);
  }
}
