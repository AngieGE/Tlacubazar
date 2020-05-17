import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TlacuServices } from 'src/app/services/index';
import { User } from '../../models/User';
import {Router} from '@angular/router';

/* Google and Facebook Font Awesome logos */
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

/* angularx-social-login Componentes */
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';
import { Route } from '@angular/compiler/src/core';

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
    private tlacu: TlacuServices,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // nos suscribimos al estado de autentificacion
    this.authService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      console.log(this.socialUser);
      if (this.socialUser === null) {
        return;
      }
      this.tlacu.manager.setItems( this.socialUser, this.getUser(this.socialUser));

      this.tlacu.user.createUser(this.getUser(this.socialUser)).subscribe(
          res => {
            console.log('Created user!', res);
          },
          err => {
            console.log('Could not create user', err);
          }
        );

      if (localStorage.getItem('tlacu-user') != null) {
        this.router.navigate(['/profile']);
      }

    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    getUser(socialUser: SocialUser): User {
      const user = new User();
      user.email = socialUser.email;
      user.firstName = socialUser.firstName;
      user.lastName = socialUser.lastName;
      return user;
  }

}
