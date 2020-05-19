import { Component, OnInit } from '@angular/core';
import {TlacuServices} from '../../services/index';
import {Router} from '@angular/router';
import { User, _StatusEnum } from 'src/app/models';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User = null;
  socialUser: SocialUser = null;
  cartProducts = 0;

  constructor( private tlacu: TlacuServices, private router: Router) {
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

  login() {
    this.router.navigate(['/login']);
  }
}
