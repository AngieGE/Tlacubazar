import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listOrderDetails(idOrderDetails?: number, quantityOrdered?: number, fkOrder?: number, fkProduct?: number) {
    let params = new HttpParams();
    if (idOrderDetails !== undefined && idOrderDetails !== null) {
      params = params.set('idOrderDetails', idOrderDetails.toString());
    }
    if (quantityOrdered !== undefined && quantityOrdered !== null) {
      params = params.set('quantityOrdered', quantityOrdered.toString());
    }
    if (fkOrder !== undefined && fkOrder !== null) {
      params = params.set('fkOrder', fkOrder.toString());
    }
    if (fkProduct !== undefined && fkProduct !== null) {
      params = params.set('fkProduct', fkProduct.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<OrderDetails[]>(`${this.API_URL}/orderDetails`, { params, headers });
  }

  public getOrderDetails(idOrderDetails: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<OrderDetails[]>(`${this.API_URL}/orderDetails/${idOrderDetails}`, { headers });
  }

  public createOrderDetails(orderDetails: OrderDetails): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<OrderDetails>(`${this.API_URL}/orderDetails`, orderDetails, { headers });
  }

  public updateStoreReview(idOrderDetails: number, orderDetails: OrderDetails): Observable<any>{
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<OrderDetails>(`${this.API_URL}/orderDetails/${idOrderDetails}`, orderDetails, { headers });
  }

  public deleteOrderDetails(idOrderDetails: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete<OrderDetails>(`${this.API_URL}/orderDetails/${idOrderDetails}`, { headers });
  }
}
