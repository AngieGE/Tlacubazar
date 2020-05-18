import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CategoryEnum } from '../models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryEnumService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listCategoryEnum(idCategoryEnum?: number, category?: string): Observable<any> {
    let params = new HttpParams();

    if (idCategoryEnum !== undefined && idCategoryEnum !== null) {
      params = params.set('idCategoryEnum', idCategoryEnum.toString());
    }
    if (category !== undefined && category !== null) {
      params = params.set('category', category);
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<CategoryEnum[]>(`${this.API_URL}/categoryEnum`, { params, headers });
  }




}
