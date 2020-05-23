import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000/order';

  constructor(private http: HttpClient) { }

  public listOrder( idOrder?: number, fkUser?: number, fkStore?: number,  fkStatusEnum?: number): Observable<any> {
    let params = new HttpParams();

    if (idOrder !== undefined && idOrder !== null) {
      params = params.set('idOrder', idOrder.toString());
    }
    if (fkStatusEnum !== undefined && fkStatusEnum !== null) {
      params = params.set('fkStatusEnum', fkStatusEnum.toString());
    }
    if (fkStore !== undefined && fkStore !== null) {
      params = params.set('fkStore', fkStore.toString());
    }
    if (fkUser !== undefined && fkUser !== null) {
      params = params.set('fkUser', fkUser.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Order[]>(`${this.API_URL}`, { params, headers });
  }

  public getOrder(idOrder: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Order[]>(`${this.API_URL}/${idOrder}`, { headers });
  }

  public createOrder(order: Order): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<Order>(`${this.API_URL}`, order, { headers });
  }

  public updateOrder(idOrder: number, order: Order): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<Order>(`${this.API_URL}/${idOrder}`, order, { headers });
  }

  public deleteOrder(idOrder: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/${idOrder}`, { headers });
  }
}
