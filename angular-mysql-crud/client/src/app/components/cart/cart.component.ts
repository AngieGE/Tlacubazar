import { Component, OnInit } from '@angular/core';
import {TlacuServices} from '../../services/index';
import {Router} from '@angular/router';
import { User, _StatusEnum, OrderProduct, Product, Store,
        Address, AddressEnum, CityEnum } from 'src/app/models';
import { SocialUser } from 'angularx-social-login';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CartComponent implements OnInit {
  user: User = null;
  cartOrders: OrderProduct[];
  selectedCartOrders: OrderProduct[];
  userCityId: number;

  constructor( private tlacu: TlacuServices, private router: Router, private modalService: NgbModal) {
    this.user = this.tlacu.manager.user;
    this.cartOrders = new Array();
    this.selectedCartOrders = new Array();
    if (this.user != null) {
      if (this.user.address != null) {
        this.userCityId = this.user.address.fkCityEnum;
      } else {
        this.userCityId = null;
      }
      this.getCartProduct();
    }
  }

  ngOnInit(): void {
    this.tlacu.manager.updateCurrentUserAddress.subscribe(
      state => {
        this.user = this.tlacu.manager.user;
        if (this.user != null) {
          if (this.user.address != null) {
            this.userCityId = this.user.address.fkCityEnum;
          } else {
            this.userCityId = null;
          }
        }
      });
  }

  getCartProduct() {
    let cartOrdersTemp: OrderProduct[] = new Array();
    this.tlacu.orderProduct.listOrderProduct(null, this.tlacu.manager.user.idUser, null, _StatusEnum.StatusEnum.EN_CARRITO).
      subscribe( orders => { // esperando envio
        orders.recordset.forEach( o  => {
          const orderProduct = new OrderProduct(o);
          // get the orderProduct.product
          this.getproductDetails(orderProduct);
          cartOrdersTemp.push(orderProduct);
        });
        this.cartOrders = cartOrdersTemp;
        console.log(this.cartOrders);
      });
    }

  async getproductDetails(orderProduct: OrderProduct) {
      const productRes = await this.tlacu.product.getProduct(orderProduct.fkProduct).toPromise();
      orderProduct.product = new Product(productRes.recordset[0]);
      // get product store
      this.tlacu.store.getStore(orderProduct.product.fkStore).subscribe(
        s => {
          const store = new Store(s.recordset[0]);
          orderProduct.product.store = store;
          // get product´s store address
          this.tlacu.address.getAddress(store.fkAddress).subscribe(
            a => {
            const add = new Address(a.recordset[0]);
            orderProduct.product.store.address = add;
            // get products store addresse´s city enum
            this.tlacu.cityEnum.getCityEnum(add.fkCityEnum).subscribe(
              c => {
                const city = new CityEnum(c.recordset[0]);
                orderProduct.product.store.address.cityEnum = city;
                orderProduct.cityEnum = city;
              });
          });
      });
  }

  login() {
    this.router.navigate(['/login']);
  }

  updateAmount(orderProduct: OrderProduct, amountItems: number) {
    console.log('updating');
    orderProduct.amount = amountItems;
    orderProduct.date = new Date(orderProduct.date).toLocaleString(); // '2020-05-25 13:28:52'

    this.tlacu.orderProduct.updateOrderProduct( orderProduct.idOrderProduct, orderProduct).
      subscribe( res => {
    }, err => {console.log(err); });
  }

  setAllCategories(select: boolean) {
    this.cartOrders.forEach( order => {
      if (order.cityEnum.idCityEnum === this.userCityId) {
        order.selected = select;
      } else {
        order.selected = false;
      }
    });
    console.log(this.cartOrders);
  }

  clickCartOrder(cartOrder: OrderProduct) {
    cartOrder.selected = !cartOrder.selected;
    console.log(this.cartOrders);
  }

  open(content) {
    this.setSelectedCartOrders();
    if (this.selectedCartOrders.length <= 0) {
      alert('Selecciona los articulos que deseas ordenar');
      return;
    }
    this.modalService.open(content);
  }

  goProduct(id: number) {
    this.router.navigate(['/product/' + id]);
  }

  removeOrderProducts() {
    this.setSelectedCartOrders();
    if (this.selectedCartOrders.length <= 0) {
      alert('Selecciona los artículos que deseas eliminar');
      return;
    }
    let deli = new Array();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.cartOrders.length; i++ ) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < this.selectedCartOrders.length; j++) {
        if (this.cartOrders[i].idOrderProduct === this.selectedCartOrders[j].idOrderProduct) {
          deli.push(this.cartOrders[i].idOrderProduct);
        }
      }
    }
    //remove them from database
    deli.forEach(id => {
      this.tlacu.orderProduct.deleteOrderProduct(id).subscribe(res => {}, err => {console.log(err);});
    });
    this.getCartProduct();
    this.selectedCartOrders = new Array();
  }

  setSelectedCartOrders() {
    this.selectedCartOrders = new Array();
    this.cartOrders.forEach( co => {
      if (co.selected) {
        this.selectedCartOrders.push(co);
      }
    });
  }

}
