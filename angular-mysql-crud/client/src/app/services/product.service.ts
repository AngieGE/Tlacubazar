import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listProduct(name?: string, fkStore?: number, fkCategoryEnum?: number): Observable<any> {
    let params = new HttpParams();
    console.log(fkStore);
    if (name !== undefined && name !== null) {
      params = params.set('name', name);
    }
    if (fkStore !== undefined && fkStore !== null) {
      params = params.set('fkStore', fkStore.toString());
    }
    if (fkCategoryEnum !== undefined && fkCategoryEnum !== null) {
      params = params.set('fkCategoryEnum', fkCategoryEnum.toString());
    }
    console.log(params);

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Product[]>(`${this.API_URL}/product`, { params, headers });
  }

  public getProduct(idProduct: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Product[]>(`${this.API_URL}/product/${idProduct}`, { headers });
  }

  public createProduct(product: Product): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<Product>(`${this.API_URL}/product`, product, { headers });
  }

  public updateProduct(idProduct: number, product: Product): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<Product>(`${this.API_URL}/product/${idProduct}`, product, { headers });
  }

  public deleteProduct(idProduct: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/product/${idProduct}`, { headers });
  }
}
