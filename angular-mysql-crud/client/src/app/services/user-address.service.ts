import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { UserAddress } from '../models/UserAddress';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listUserAddress(fkUser?: number, fkAddress?: number): Observable<any> {
    // Params
    let params = new HttpParams();

    if (fkUser !== undefined && fkUser !== null) {
      params = params.set('fkUser', fkUser.toString());
    }
    if (fkAddress !== undefined && fkAddress !== null) {
      params = params.set('fkAddress', fkAddress.toString());
    }


    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<UserAddress[]>(`${this.API_URL}/userAddress`, { params, headers });
  }

  public getUserAddress(idUserAddress: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<UserAddress[]>(`${this.API_URL}/userAddress//${idUserAddress}`, { headers });
  }

  public createUserAddress(userAddress: UserAddress): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return  this.http.post<UserAddress>(`${this.API_URL}/userAddress`, userAddress, { headers } );
  }

  public updateUserAddress(idUserAddress: number, userAddress: UserAddress): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<UserAddress>(`${this.API_URL}/userAddress/${idUserAddress}`, userAddress,  { headers } );
  }

  public deleteUserAddress(idUserAddress: number): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.delete(`${this.API_URL}/userAddress/${idUserAddress}`, { headers } );

  }
}
