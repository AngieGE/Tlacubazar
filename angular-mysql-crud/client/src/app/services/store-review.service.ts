import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StoreReview } from '../models/StoreReview';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreReviewService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listStoreReview(fkStore?: number, fkUser?: number) : Observable<any>{
    let params = new HttpParams();

    if (fkStore !== undefined && fkStore !== null) {
      params = params.set('fkStore', fkStore.toString());
    }
    if (fkUser !== undefined && fkUser !== null) {
      params = params.set('fkUser', fkUser.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<StoreReview[]>(`${this.API_URL}/storeReview`, { params, headers });
  }

  public getStoreReview(idStoreReview: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<StoreReview[]>(`${this.API_URL}/storeReview/${idStoreReview}`, { headers });
  }

  public createStoreReview(storeReview: StoreReview): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<StoreReview>(`${this.API_URL}/storeReview`, storeReview, { headers });
  }

  public updateStoreReview(idStoreReview: number, storeReview: StoreReview): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<StoreReview>(`${this.API_URL}/storeReview/${idStoreReview}`, storeReview, { headers });
  }

  public deleteStore(idStore: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/storeReview/${idStore}`, { headers });
  }
}
