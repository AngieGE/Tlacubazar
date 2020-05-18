import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import {TlacuServices} from '../../services/index';
import { User, _StatusEnum } from 'src/app/models';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  active = 0;
  user: User = null;
  socialUser: SocialUser = null;
  cartProducts = 0;
  constructor(private authService: AuthService, private tlacu: TlacuServices, private router: Router) {
    this.user = this.tlacu.manager.user;
    this.socialUser = this.tlacu.manager.socialUser;
    if (this.user != null) {
      this.getCartProduct();
    }
   }

  ngOnInit(): void {

  }

  getCartProduct() {
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.ESPERANDO_ENVIO, this.user.idUser).subscribe( orders => { // esperando envio
      this.cartProducts = orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.PAUSADA, this.user.idUser).subscribe( orders => { // pausado
      this.cartProducts += orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.ENVIADA, this.user.idUser).subscribe( orders => { // enviada
      this.cartProducts += orders.length;
    });
    this.tlacu.order.listOrder(null, _StatusEnum.StatusEnum.PAGADA, this.user.idUser).subscribe( orders => { // pagada
      this.cartProducts += orders.length;
    });
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
    this.active = 3;
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
