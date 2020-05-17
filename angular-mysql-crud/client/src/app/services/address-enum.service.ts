import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AddressEnum } from '../models/AddressEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressEnumService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000/addressEnum';

  constructor(private http: HttpClient) { }

  public listAddressEnum(idAddressEnum?: number, address?: string) {
    let params = new HttpParams();

    if (idAddressEnum !== undefined && idAddressEnum !== null) {
      params = params.set('idAddressEnum', idAddressEnum.toString());
    }
    if (address !== undefined && address !== null) {
      params = params.set('address', address);
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<AddressEnum[]>(`${this.API_URL}`, { params, headers });
  }

  public getAddressEnum(idAddressEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<AddressEnum[]>(`${this.API_URL}/${idAddressEnum}`, { headers });
  }

  public createAddressEnum(addressEnum: AddressEnum): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<AddressEnum>(`${this.API_URL}`, addressEnum, { headers });
  }

  public updateAddressEnum(
    idAddressEnum: number, addressEnum: AddressEnum
  ): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<AddressEnum>(`${this.API_URL}/${idAddressEnum}`, addressEnum, { headers });
  }

  public deleteAddressEnum(idAddressEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/${idAddressEnum}`, { headers });
  }
}
