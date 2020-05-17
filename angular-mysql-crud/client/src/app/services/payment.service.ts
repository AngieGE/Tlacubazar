import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listPayment(idPayment?: number, fkClient?: number, fkVendor?: number, fkOrder?: number) {
    let params = new HttpParams();

    if (idPayment !== undefined && idPayment !== null){
      params = params.set('idPayment', idPayment.toString());
    }
    if (fkClient !== undefined && fkClient !== null) {
      params = params.set('fkClient', fkClient.toString());
    }
    if (fkVendor !== undefined && fkVendor !== null) {
      params = params.set('fkVendor', fkVendor.toString());
    }
    if (fkOrder !== undefined && fkOrder !== null) {
      params = params.set('fkOrder', fkOrder.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Payment[]>(`${this.API_URL}/payment`, { params, headers });
  }

  public getPayment(idPayment: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Payment[]>(`${this.API_URL}/payment/${idPayment}`, { headers });
  }

  public createPayment(payment: Payment): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<Payment>(`${this.API_URL}/payment`, payment, { headers });
  }

  public updatePayment(idPayment: number, payment: Payment): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<Payment>(`${this.API_URL}/payment/${idPayment}`, payment, { headers });
  }

  public deletePayment(idPayment: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/payment/${idPayment}`, { headers });
  }
}
