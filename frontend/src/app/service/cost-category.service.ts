import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostCategory } from 'app/model/cost-category';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CostCategoryService {

  costApiUrl: string = 'http://localhost:3000/costcategories';

  list$: BehaviorSubject<CostCategory[]> = new BehaviorSubject<CostCategory[]>([]);
  _id: string | number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<CostCategory[]>(this.costApiUrl).subscribe(costcategories => this.list$.next(costcategories));
  }

  get(_id: number | string): Observable<CostCategory> {
    return this.http.get<CostCategory>(`${this.costApiUrl}/${_id}`);
  }

  update(costCategory: CostCategory): Observable<CostCategory> {
    return this.http
      .patch<CostCategory>(`${this.costApiUrl}/${costCategory._id}`, costCategory)
      .pipe(tap(() => this.getAll()));
  }

  create(costCategory: CostCategory): Observable<CostCategory> {
    const postData = { ...costCategory, _id: null };
    return this.http.post<CostCategory>(this.costApiUrl, postData);
  }

  remove(_id: number | string): void {
    this.http.delete<CostCategory>(`${this.costApiUrl}/${_id}`).subscribe(
      () => this.getAll()
    );
  }

}