import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl: string = 'http://localhost:3000/users';

  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  _id: string | number;


  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<User[]>(this.userApiUrl).subscribe(users => this.list$.next(users));
  }

  get(_id: number | string): Observable<User> {
    return this.http.get<User>(`${this.userApiUrl}/${_id}`);
  }

  update(user: User): Observable<User> {
    return this.http
      .patch<User>(`${this.userApiUrl}/${user._id}`, user)
      .pipe(tap(() => this.getAll()));
  }

  create(user: User): Observable<User> {
    const postData = { ...user, _id: null };
    return this.http.post<User>(this.userApiUrl, postData);
  }

  remove(_id: number | string): void {
    this.http.delete<User>(`${this.userApiUrl}/${_id}`).subscribe(
      () => this.getAll()
    );
  }


}