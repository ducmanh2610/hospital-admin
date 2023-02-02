import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Token, User } from 'src/models';
import * as moment from 'moment';
import { LocalService } from '../local-storage/local.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

const HTTP_API = 'http://localhost:8081/api/v1/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  constructor(private http: HttpClient, private localService: LocalService, private router: Router) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${HTTP_API}/login`, { username, password }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  logout() {
    this.localService.clearData();
    this.router.navigate(['/auth/login']);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = this.localService.getData("expiredAt");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
