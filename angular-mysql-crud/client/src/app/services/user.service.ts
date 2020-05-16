import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  saveUser(u: User) {
    return this.http.post( `${this.API_URL}`, u);
  }

  public listUser(idUser?: number, isVendor?: number, firstName?: string, lastName?: string) {
    let params = new HttpParams();

    if (idUser !== undefined && idUser !== null) {
      params = params.set('idUser', idUser.toString());
    }
    if (isVendor !== undefined && isVendor !== null) {
      params = params.set('isVendor', isVendor.toString());
    }
    if (firstName !== undefined && firstName !== null) {
      params = params.set('firstName', firstName);
    }
    if (lastName !== undefined && lastName !== null) {
      params = params.set('lastName', lastName);
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<User[]>(`${this.API_URL}/user`, { params, headers });
  }

  public getUser(idUser: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<User[]>(`${this.API_URL}/sser/${idUser}`, { headers });
  }

  public createUser(user: User): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<User>(`${this.API_URL}/user`, user, { headers });
  }

  public updateUser(idUser: number, user: User): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<User>(`${this.API_URL}/user/${idUser}`, user, { headers });
  }

  public deleteStore(idStore: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/user/${idStore}`, { headers });
  }
}
