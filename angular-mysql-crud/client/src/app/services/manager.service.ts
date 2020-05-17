import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  user: User;
  socialUser: SocialUser;

  constructor() { }

  setItems(socialUser: SocialUser, user: User) {
    this.user = new User(user);
    this.socialUser = socialUser;
    localStorage.setItem('tlacu-user', JSON.stringify(user));
    localStorage.setItem('tlacu-social-user', JSON.stringify(socialUser));
  }

  unsetItems() {
      this.user = null;
      this.socialUser = null;
      localStorage.setItem('tlacu-user', null);
      localStorage.setItem('tlacu-social-user', null);
  }


}
