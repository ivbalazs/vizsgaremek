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
  id: string | number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Cost[]>(this.costApiUrl).subscribe(costs => this.list$.next(costs));
  }

  get(id: number | string): Observable<Cost> {
    id = parseInt(('' + id), 10);
    return this.http.get<Cost>(`${this.costApiUrl}/${id}`);
  }

  update(cost: Cost): Observable<Cost> {
    return this.http
      .patch<Cost>(`${this.costApiUrl}/${cost.id}`, cost)
      .pipe(tap(() => this.getAll()));
  }

  create(cost: Cost): Observable<Cost> {
    return this.http.post<Cost>(this.costApiUrl, cost);
  }

  remove(id: number | string): void {
    id = parseInt(('' + id), 10);
    this.http.delete<Cost>(`${this.costApiUrl}/${id}`).subscribe(
      () => this.getAll()
    );
  }
}
