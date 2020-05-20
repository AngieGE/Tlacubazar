import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { User, Store, CategoryEnum, StoreReview, Product, Order, _StatusEnum } from 'src/app/models/index';
import { SocialUser } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private tlacu: TlacuServices, private router: Router,  private activatedRoute: ActivatedRoute ) {
    const id = +this.activatedRoute.snapshot.paramMap.get('idProduct');

    this.getProduct(id);
  }

  ngOnInit(): void {
  }

  getProduct(idProduct: number) {
    this.tlacu.product.getProduct(idProduct).subscribe(res => {
      this.product = new Product(res.recordset[0]);
      // get prod store
      this.getProdStore(this.product);
      // get prod category
      this.getProdCategory(this.product);
      // check results
      console.log(this.product);
    });
  }

  getProdStore(product: Product) {
    this.tlacu.store.getStore(product.fkStore).subscribe( res => {
      console.log(res);
      const store: Store = new Store(res.recordset[0]);
      product.store = store;
    });
  }

  getProdCategory(product: Product) {
    this.tlacu.categoryEnum.listCategoryEnum(product.fkCategoryEnum, null).subscribe( res => {
      console.log(res);
      const cat: CategoryEnum = new CategoryEnum(res.recordset[0]);
      product.categoryEnum = cat;
    });
  }

  addCart() {
    // no user logged in
    if (this.tlacu.manager.user == null) {
      alert('Debe iniciar sesión en TlacuBazar para comprar');
    } else  {
      // añadir a carrito
      var today = new Date();
      const order: Order = new Order({orderDate: today,
                          fkStatusEnum: _StatusEnum.StatusEnum.PAUSADA,
                          comments: '', totalPrice: this.product.buyPrice,
                        totalMaxCacaoPrice: this.product.maxCacaoBuyPrice,
                        fkUser: this.tlacu.manager.user.idUser,
                        fkProduct: this.product.idProduct});
                        console.log('create order');
      this.tlacu.order.createOrder(order).subscribe( res => {
        console.log(res);
      });
      // decidir alert
      if (this.tlacu.manager.user.readUserCourse !== 1) {
        alert('Debe iniciar sesión en TlacuBazar para comprar');
      } else {
        alert('Su compra fue agregada a su carrito');
        //this.router.navigate(['/cart/']);

      }

    }

  }

  goStore() {
    this.router.navigate(['/store/' + this.product.fkStore]);
  }
}
