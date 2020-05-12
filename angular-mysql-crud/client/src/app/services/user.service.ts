import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getCuestionarios() {
    return this.http.get(`${this.API_URL}/user/`);

  }

  getCuestionario(id: string) {
    return this.http.get(  `${this.API_URL}/user/${id}`);
  }

  deleteCuestionario(id: string){
    return this.http.delete( `${this.API_URL}/user/${id}`);
  }

  // saveUser(user: Users){
  //   return this.http.post(  `${this.API_URL}`, user);
  // }
  saveUser(user: User) {
    return this.http.post( `${this.API_URL}`, user);
  }

<<<<<<< HEAD:angular-mysql-crud/client/src/app/services/user.service.ts
  updateCuestionario(id: string, updateUser: User){
    return this.http.put( `${this.API_URL}/user/${id}`, updateUser);
  }
=======
  //updateCuestionario(id: string, updateUser: Users){
  //  return this.http.put( `${this.API_URL}/user/${id}`, updateUser);
  //}
>>>>>>> 0169c665bc700f0490abc424163af4d722f32e11:angular-mysql-crud/client/src/app/services/user/user.service.ts
}
