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

      // si ya esta el correo en la BD lo tomo y seteo
      // si no esta el correo creo el usuario
      this.tlacu.user.listUser(null, null, null, null, this.socialUser.email).subscribe(
        users => {
          if (users.length < 1) { // aun no existe el usuario
            console.log("no hubo users con ese mail, lo creo");
            this.tlacu.user.createUser(this.getUser(this.socialUser)).subscribe( newUser => {
              this.tlacu.user.getUser(newUser.createdUser.insertId).subscribe( res => {
                const u = new User(res.recordset);
                this.tlacu.manager.setItems( this.socialUser, u);
                this.router.navigate(['/']);
              });
            });
          } else { // el usuario ya existe
            console.log("si hubo users con ese mail, tomo el usuario");
            this.tlacu.manager.setItems( this.socialUser, new User(users.recordset[0]));
            this.router.navigate(['/']);
          }
      });
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    getUser(socialUser: SocialUser): User {
      const user = new User({ email: socialUser.email,
                              firstName: socialUser.firstName, lastName: socialUser.lastName,
                              cacaoBalance: 0, isVendor: 0});
      return user;
  }

}
