import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {
  private base = '/api/auth/';

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(this.base + 'login', user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.base + 'register', user);
  }

  logout(): Observable<boolean> {
    return this.http.delete<boolean>(this.base + 'logout');
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return expired && userID && session && expired > Date.now();
  }
}
