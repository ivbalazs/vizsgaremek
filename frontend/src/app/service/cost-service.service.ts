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
  _id: string | number;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<CostService[]>(this.costApiUrl).subscribe(costservices => this.list$.next(costservices));
  }

  get(_id: number | string): Observable<CostService> {
    // _id = parseInt(('' + _id), 10);
    return this.http.get<CostService>(`${this.costApiUrl}/${_id}`);
  }

  update(costService: CostService): Observable<CostService> {
    return this.http
      .patch<CostService>(`${this.costApiUrl}/${costService._id}`, costService)
      .pipe(tap(() => this.getAll()));
  }

  create(costService: CostService): Observable<CostService> {
    const postData = { ...costService, _id: null };
    return this.http.post<CostService>(this.costApiUrl, postData);
  }

  remove(_id: number | string): void {
    // _id = parseInt(('' + _id), 10);
    this.http.delete<CostService>(`${this.costApiUrl}/${_id}`).subscribe(
      () => this.getAll()
    );
  }

}
