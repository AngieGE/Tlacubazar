import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { SuburbEnum } from '../models/SuburbEnum';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuburbEnumService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listSuburbEnum(
    idSuburbEnum?: number, suburb?: string, postalCode?: number,
    fkCityEnum?: number): Observable<any> {

    let params = new HttpParams(); // Params

    if (idSuburbEnum !== undefined && idSuburbEnum !== null) {
      params = params.set('idSuburbEnum', idSuburbEnum.toString());
    }
    if (suburb !== undefined && suburb !== null) {
      params = params.set('suburb', suburb);
    }
    if (postalCode !== undefined && postalCode !== null) {
      params = params.set('postalCode', postalCode.toString());
    }
    if (fkCityEnum !== undefined && fkCityEnum !== null) {
      params = params.set('fkCityEnum', fkCityEnum.toString());
    }

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<SuburbEnum[]>(`${this.API_URL}/suburbEnum`, { params, headers });
  }

  public getSuburbEnum(idSuburbEnum: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<SuburbEnum[]>(`${this.API_URL}/suburbEnum//${idSuburbEnum}`, { headers });
  }

  public createSuburbEnum(suburbEnum: SuburbEnum): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return  this.http.post<SuburbEnum>(`${this.API_URL}/suburbEnum`, suburbEnum, { headers } );
  }

  public updateSuburbEnum(idSuburbEnum: number, suburbEnum: SuburbEnum): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<SuburbEnum>(`${this.API_URL}/suburbEnum/${idSuburbEnum}`, suburbEnum,  { headers } );
  }

  public deleteSuburbEnum(idSuburbEnum: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.delete(`${this.API_URL}/suburbEnum/${idSuburbEnum}`, { headers } );

  }
}
