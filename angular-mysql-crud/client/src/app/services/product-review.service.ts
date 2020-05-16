import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductReview } from '../models/ProductReview';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listProductReview(fkProduct?: number, fkUser?: number) {
    let params = new HttpParams();

    if (fkProduct !== undefined && fkProduct !== null) {
      params = params.set('fkProduct', fkProduct.toString());
    }
    if (fkUser !== undefined && fkUser !== null) {
      params = params.set('fkUser', fkUser.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<ProductReview[]>(`${this.API_URL}/productReview`, { params, headers });
  }

  public getProductReview(idProductReview: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<ProductReview[]>(`${this.API_URL}/productReview/${idProductReview}`, { headers });
  }

  public createProductReview(productReview: ProductReview): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<ProductReview>(`${this.API_URL}/productReview`, productReview, { headers });
  }

  public updateProductReview(idProductReview: number, productReview: ProductReview): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<ProductReview>(`${this.API_URL}/productReview/${idProductReview}`, productReview, { headers });
  }

  public deleteProduct(idProduct: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/productReview/${idProduct}`, { headers });
  }
}
