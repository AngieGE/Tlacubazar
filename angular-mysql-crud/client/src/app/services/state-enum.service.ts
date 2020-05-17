import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StateEnum } from '../models/StateEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateEnumService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public listStateEnum(idStateEnum: number, state: string) {
    let params = new HttpParams();

    if (idStateEnum !== undefined && idStateEnum !== null) {
      params = params.set('idStateEnum', idStateEnum.toString());
    }
    if (state !== undefined && state !== null) {
      params = params.set('state', state.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<StateEnum[]>(`${this.API_URL}/stateEnum`, { params, headers });
  }

  public getStateEnum(idStateEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<StateEnum[]>(`${this.API_URL}/stateEnum/${idStateEnum}`, { headers });
  }

  public createStateEnum(stateEnum: StateEnum): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<StateEnum>(`${this.API_URL}/stateEnum`, stateEnum, { headers });
  }

  public updateStateEnum(idStateEnum: number, stateEnum: StateEnum): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<StateEnum>(`${this.API_URL}/stateEnum/${idStateEnum}`, stateEnum, { headers });
  }

  public deleteStateEnum(idStateEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/stateEnum/${idStateEnum}`, { headers });
  }
}
