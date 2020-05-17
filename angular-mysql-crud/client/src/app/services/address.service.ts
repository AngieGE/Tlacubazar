import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Address } from '../models/Address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000/address';

  constructor(private http: HttpClient) { }

  public listAddress(
    idAddress?: number, fkAddressEnum?: number, fkStateEnum?: number,
    fkCityEnum?: number, fkSuburbEnum?: number
  ): Observable<any> {
    let params = new HttpParams();

    if (idAddress !== undefined && idAddress !== null) {
      params = params.set('idAddress', idAddress.toString());
    }
    if (fkAddressEnum !== undefined && fkAddressEnum !== null) {
      params = params.set('fkAddressEnum', fkAddressEnum.toString());
    }
    if (fkStateEnum !== undefined && fkStateEnum !== null) {
      params = params.set('fkStateEnum', fkStateEnum.toString());
    }
    if (fkCityEnum !== undefined && fkCityEnum !== null) {
      params = params.set('fkCityEnum', fkCityEnum.toString());
    }
    if (fkSuburbEnum !== undefined && fkSuburbEnum !== null) {
      params = params.set('fkSuburbEnum', fkSuburbEnum.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Address[]>(`${this.API_URL}/address`, { params, headers });
  }

  public getAddress(idAddress: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<Address[]>(`${this.API_URL}/address/${idAddress}`, { headers });
  }

  public createAddress(address: Address): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<Address>(`${this.API_URL}`, address, { headers });
  }

  public updateAddress(idAddress: number, address: Address): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<Address>(`${this.API_URL}/address/${idAddress}`, address, { headers });
  }

  public deleteAddress(idAddress: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/address/${idAddress}`, { headers });
  }
}
