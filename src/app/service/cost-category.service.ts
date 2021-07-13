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

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<CostCategory[]>(this.costApiUrl).subscribe(costcategories => this.list$.next(costcategories));
  }

  get(id: number | string): Observable<CostCategory> {
    id = parseInt(('' + id), 10);
    return this.http.get<CostCategory>(`${this.costApiUrl}/${id}`);
  }

  update(costCategory: CostCategory): Observable<CostCategory> {
    return this.http
      .patch<CostCategory>(`${this.costApiUrl}/${costCategory.id}`, costCategory)
      .pipe(tap(() => this.getAll()));
  }

  create(costCategory: CostCategory): Observable<CostCategory> {
    return this.http.post<CostCategory>(this.costApiUrl, costCategory);
  }

  remove(id: number | string): void {
    id = parseInt(('' + id), 10);
    this.http.delete<CostCategory>(`${this.costApiUrl}/${id}`).subscribe(
      () => this.getAll()
    );
  }

}
