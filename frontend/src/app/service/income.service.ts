import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from 'app/model/income';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  incomeApiUrl: string = 'http://localhost:3000/income';

  list$: BehaviorSubject<Income[]> = new BehaviorSubject<Income[]>([]);
  _id: string | number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Income[]>(this.incomeApiUrl).subscribe(incomes => this.list$.next(incomes));
  }

  get(_id: number | string): Observable<Income> {
    return this.http.get<Income>(`${this.incomeApiUrl}/${_id}`);
  }

  update(income: Income): Observable<Income> {
    return this.http
      .patch<Income>(`${this.incomeApiUrl}/${income._id}`, income)
      .pipe(tap(() => this.getAll()));
  }

  create(income: Income): Observable<Income> {
    const postData = { ...income, _id: null };
    return this.http.post<Income>(this.incomeApiUrl, postData);
  }

  remove(_id: number | string): void {
    this.http.delete<Income>(`${this.incomeApiUrl}/${_id}`).subscribe(
      () => this.getAll()
    );
  }

}