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
/*
  getCuestionario(id: string){
    return this.http.get(  `${this.API_URL}/user/${id}`);
  }

  deleteCuestionario(id: string){
    return this.http.delete( `${this.API_URL}/user/${id}`);
  }

  saveCuestionario(user: Users){
    return this.http.post(  `${this.API_URL}/user`, user);
  }

  updateCuestionario(id: string, updateUser: Users){
    return this.http.put( `${this.API_URL}/user/${id}`, updateUser);
  }
  */
}
