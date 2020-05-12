import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../models/Users';
import { User } from '../../models/user/User';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getCuestionarios(){
    return this.http.get(`${this.API_URL}/user/`);

  }

  getCuestionario(id: string){
    return this.http.get(  `${this.API_URL}/user/${id}`);
  }

  deleteCuestionario(id: string){
    return this.http.delete( `${this.API_URL}/user/${id}`);
  }

  // saveUser(user: Users){
  //   return this.http.post(  `${this.API_URL}`, user);
  // }
  saveUser(user: User){
    return this.http.post( `${this.API_URL}`, user);
  }

  updateCuestionario(id: string, updateUser: Users){
    return this.http.put( `${this.API_URL}/user/${id}`, updateUser);
  }
}
