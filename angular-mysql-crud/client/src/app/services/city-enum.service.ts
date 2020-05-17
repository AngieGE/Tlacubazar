import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CityEnum } from '../models/CityEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityEnumService {
  public defaultHeaders = new HttpHeaders();
  API_URL = 'http://localhost:3000/cityEnum';

  constructor(private http: HttpClient) { }

  public listCityEnum(
    idCityEnum?: number, city?: string,
    fkStateEnum?: number
  ): Observable<any> {
    let params = new HttpParams();

    if (idCityEnum !== undefined && idCityEnum !== null) {
      params = params.set('idCityEnum', idCityEnum.toString());
    }
    if (city !== undefined && city !== null) {
      params = params.set('city', city);
    }
    if (fkStateEnum !== undefined && fkStateEnum !== null) {
      params = params.set('fkStateEnum', fkStateEnum.toString());
    }

    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<CityEnum[]>(`${this.API_URL}`, { params, headers });
  }

  public getCityEnum(idCityEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get<CityEnum[]>(`${this.API_URL}/${idCityEnum}`, { headers });
  }

  public createCityEnum(cityEnum: CityEnum): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<CityEnum>(`${this.API_URL}`, cityEnum, { headers });
  }

  public updateCityEnum(idCityEnum: number, cityEnum: CityEnum): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.put<CityEnum>(`${this.API_URL}/${idCityEnum}`, cityEnum, { headers });
  }

  public deleteCityEnum(idCityEnum: number): Observable<any> {
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    return this.http.delete(`${this.API_URL}/${idCityEnum}`, { headers });
  }
}
