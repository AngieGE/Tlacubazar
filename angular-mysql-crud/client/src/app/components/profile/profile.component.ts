import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';

/* angularx-social-login Componentes */
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  socialUser: SocialUser;
  loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private tlacu: TlacuServices
  ) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    console.log('user: ', this.user);
    console.log('socialUser: ', this.socialUser);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
