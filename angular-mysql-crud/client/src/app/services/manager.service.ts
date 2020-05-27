import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User, UserAddress } from '../models';
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
  updateUserAddress = new Subject<number>();
  updateCurrentUserAddress = new Subject<number>();
  cartEvent = new Subject<number>();

  constructor() {
    this.getTokenItems();
  }

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

  getTokenItems() {
    try {
        this.user = JSON.parse(localStorage.getItem('tlacu-user'));
        this.socialUser = JSON.parse(localStorage.getItem('tlacu-social-user'));
        if (this.socialUser as any === 'null' || this.user as any === 'null') {
            this.unsetItems();
        }
    } catch {
        this.unsetItems();
    }
  }



}
