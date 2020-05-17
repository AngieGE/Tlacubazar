import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import {TlacuServices} from '../../services/index';
import { User } from 'src/app/models';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  active = 0;
  user: User = null;
  socialUser: SocialUser = null;
  constructor(private authService: AuthService, private tlacu: TlacuServices, private router: Router) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
   }

  ngOnInit(): void {

  }

  goCart() {
    this.router.navigate(['/cart']);
  }

  goService() {
    this.active = 2;
    this.router.navigate(['/catalogue/service/']);
  }

  goProduct() {
    this.active = 2;
    this.router.navigate(['/catalogue/product/']);
  }

  myProfile() {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.tlacu.manager.unsetItems();
    this.authService.signOut().then( res => {
      this.router.navigate(['/login']);
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
