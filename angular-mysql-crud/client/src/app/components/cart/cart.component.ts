import { Component, OnInit } from '@angular/core';
import {TlacuServices} from '../../services/index';
import {Router} from '@angular/router';
import { User } from 'src/app/models';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User = null;
  socialUser: SocialUser = null;

  constructor( private tlacu: TlacuServices, private router: Router) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login']);
  }
}
