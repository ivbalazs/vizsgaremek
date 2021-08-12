import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cost } from 'app/model/cost';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  costApiUrl: string = 'http://localhost:3000/costs';

  list$: BehaviorSubject<Cost[]> = new BehaviorSubject<Cost[]>([]);
  _id: string | number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Cost[]>(this.costApiUrl).subscribe(costs => this.list$.next(costs));
  }

  get(_id: number | string): Observable<Cost> {
    // _id = parseInt(('' + _id), 10);
    return this.http.get<Cost>(`${this.costApiUrl}/${_id}`);
  }

  update(cost: Cost): Observable<Cost> {
    return this.http
      .patch<Cost>(`${this.costApiUrl}/${cost._id}`, cost)
      .pipe(tap(() => this.getAll()));
  }

  create(cost: Cost): Observable<Cost> {
    const postData = { ...cost, _id: null };
    return this.http.post<Cost>(this.costApiUrl, postData);
  }

  remove(_id: number | string): void {
    // _id = parseInt(('' + _id), 10);
    this.http.delete<Cost>(`${this.costApiUrl}/${_id}`).subscribe(
      () => this.getAll()
    );
  }
}
