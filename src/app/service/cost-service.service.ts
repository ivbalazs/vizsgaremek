import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostService } from 'app/model/cost-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CostServiceService {

  costApiUrl: string = 'http://localhost:3000/costservice';

  list$: BehaviorSubject<CostService[]> = new BehaviorSubject<CostService[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<CostService[]>(this.costApiUrl).subscribe(costservices => this.list$.next(costservices));
  }

  get(id: number | string): Observable<CostService> {
    id = parseInt(('' + id), 10);
    return this.http.get<CostService>(`${this.costApiUrl}/${id}`);
  }

  update(costService: CostService): Observable<CostService> {
    return this.http
      .patch<CostService>(`${this.costApiUrl}/${costService.id}`, costService)
      .pipe(tap(() => this.getAll()));
  }

  create(costService: CostService): Observable<CostService> {
    return this.http.post<CostService>(this.costApiUrl, costService);
  }

  remove(id: number | string): void {
    id = parseInt(('' + id), 10);
    this.http.delete<CostService>(`${this.costApiUrl}/${id}`).subscribe(
      () => this.getAll()
    );
  }

}
