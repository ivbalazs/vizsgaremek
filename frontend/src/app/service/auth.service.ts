import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.config.apiUrl}login`;
  logoutUrl = `${this.config.apiUrl}logout`;
  storageName = 'currentUser';
  // currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject(null);
  lastToken: string = null;


  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) { }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginData: User): Observable<User | null> {
    return this.http.post<{ accessToken: string, user: User }>(
      this.loginUrl,
      { email: loginData.email, password: loginData.password }
    ).pipe(
      map(response => {
        if (response.user) {
          this.lastToken = response.accessToken;
          this.currentUserSubject.next(response.user);
          return response.user;
        }
        return null;
      })
    );
  }

  logout() {
    localStorage.removeItem(this.storageName);
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }

}