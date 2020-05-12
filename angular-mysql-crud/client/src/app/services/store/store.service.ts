import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '../../models/store/Store';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listStore(){
    return this.http.get(`${this.API_URL}/store/`);

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
