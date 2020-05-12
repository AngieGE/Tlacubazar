import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user/User';
/* Google and Facebook Font Awesome logos */
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

/* angularx-social-login Componentes */
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;
  faFacebook = faFacebook;

  private socialUser: SocialUser;
  private loggedIn: boolean;

  users: any = [];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {


    this.authService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      this.loggedIn = (socialUser != null);

      if (this.loggedIn) {
        const user: User = {
          idUser: -1,
          email: socialUser.email,
          firstName: socialUser.firstName,
          lastName: socialUser.lastName,
          isVendor: false,
          phone: '',
          cacaoBalance: 0.0
        };

        this.userService.saveUser(user).subscribe(
          res => {
            console.log('Created user!', res);
          },
          err => {
            console.log('Could not create user', err);
          }
        );
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
