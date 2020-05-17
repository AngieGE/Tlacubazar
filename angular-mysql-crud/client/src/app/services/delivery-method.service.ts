import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DeliveryMethod } from '../models/DeliveryMethod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryMethodService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000/deliveryMethod';

  constructor(private http: HttpClient) { }

  public listDeliveryMethod(
    fkStore?: number, fkDeliveryMethodEnum?: number
  ): Observable<any> {
    let params = new HttpParams();

    if (fkStore !== undefined && fkStore !== null) {
      params = params.set('fkStore', fkStore.toString());
    }
    if (fkDeliveryMethodEnum !== undefined && fkDeliveryMethodEnum !== null) {
      params = params.set('fkDeliveryMethodEnum', fkDeliveryMethodEnum.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<DeliveryMethod[]>(`${this.API_URL}`, { params, headers });
  }

  public createDeliveryMethod(deliveryMethod: DeliveryMethod): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<DeliveryMethod>(`${this.API_URL}`, deliveryMethod, { headers });
  }

  public deleteDeliveryMethod(
    fkStore?: number, fkDeliveryMethodEnum?: number
  ): Observable<any> {
    let params = new HttpParams();

    if (
      fkStore !== undefined &&
      fkStore !== null &&
      fkDeliveryMethodEnum !== undefined &&
      fkDeliveryMethodEnum !== null
    ) {
      params = params.set('fkStore', fkStore.toString());
      params = params.set('fkDeliveryMethodEnum', fkDeliveryMethodEnum.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}`, { params, headers });
  }
}
