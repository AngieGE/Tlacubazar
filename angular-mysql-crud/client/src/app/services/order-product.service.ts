import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderProduct } from '../models/OrderProduct';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listOrderProduct( idOrderProduct?: number, fkUser?: number,
              fkProduct?: number, fkStatusEnum?: number): Observable<any> {
    let params = new HttpParams();
    if (idOrderProduct !== undefined && idOrderProduct !== null) {
      params = params.set('idOrderProduct', idOrderProduct.toString());
    }
    if (fkUser !== undefined && fkUser !== null) {
      params = params.set('fkUser', fkUser.toString());
    }
    if (fkProduct !== undefined && fkProduct !== null) {
      params = params.set('fkProduct', fkProduct.toString());
    }
    if (fkStatusEnum !== undefined && fkStatusEnum !== null) {
      params = params.set('fkStatusEnum', fkStatusEnum.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<OrderProduct[]>(`${this.API_URL}/orderProduct`, { params, headers });
  }

  public getOrderProduct(idOrderProduct: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<OrderProduct[]>(`${this.API_URL}/orderProduct/${idOrderProduct}`, { headers });
  }

  public createOrderProduct(orderProduct: OrderProduct): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<OrderProduct>(`${this.API_URL}/orderProduct`, orderProduct, { headers });
  }

  public updateOrderProduct(idOrderProduct: number, orderProduct: OrderProduct): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<OrderProduct>(`${this.API_URL}/orderProduct/${idOrderProduct}`, orderProduct, { headers });
  }

  public deleteOrderProduct(idOrderProduct: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete<OrderProduct>(`${this.API_URL}/orderProduct/${idOrderProduct}`, { headers });
  }
}
