import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Store } from '../models/Store';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listStore(isServiceStore?: number, acceptsCacao?: number, fkStatusEnum?: number,
                  fkVendor?: number, fkCategoryEnum?: number): Observable<any> {

    let params = new HttpParams(); // Params

    if (isServiceStore !== undefined && isServiceStore !== null) {
      params = params.set('isServiceStore', isServiceStore.toString());
    }
    if (acceptsCacao !== undefined && acceptsCacao !== null) {
      params = params.set('acceptsCacao', acceptsCacao.toString());
    }
    if (fkStatusEnum !== undefined && fkStatusEnum !== null) {
      params = params.set('fkStatusEnum', fkStatusEnum.toString());
    }
    if (fkVendor !== undefined && fkVendor !== null) {
      params = params.set('fkVendor', fkVendor.toString());
    }
    if (fkCategoryEnum !== undefined && fkCategoryEnum !== null) {
      params = params.set('fkCategoryEnum', fkCategoryEnum.toString());
    }

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Store[]>(`${this.API_URL}/store`, { params, headers });
  }

  public getStore(idStore: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<Store[]>(`${this.API_URL}/store//${idStore}`, { headers });
  }

  public createStore(store: Store): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return  this.http.post<Store>(`${this.API_URL}/store`, store, { headers } );
  }

  public updateStore(idStore: number, store: Store): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<Store>(`${this.API_URL}/store/${idStore}`, store,  { headers } );
  }

  public deleteStore(idStore: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.delete(`${this.API_URL}/store/${idStore}`, { headers } );

  }
}
