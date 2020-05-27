import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { User, Store, CategoryEnum, ProductReview, Product,
        Order, Address, StateEnum, CityEnum, SuburbEnum,
         _StatusEnum, AddressEnum, OrderProduct } from 'src/app/models/index';
import { SocialUser } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  idUser;
  constructor(private tlacu: TlacuServices, private router: Router,  private activatedRoute: ActivatedRoute ) {
    const id = +this.activatedRoute.snapshot.paramMap.get('idProduct');
    this.idUser = (this.tlacu.manager.user != null) ? this.tlacu.manager.user.idUser : null;
    this.getProduct(id);
  }

  ngOnInit(): void {
  }

  getProduct(idProduct: number) {
    this.tlacu.product.getProduct(idProduct).subscribe(res => {
      this.product = new Product(res.recordset[0]);
      // get prod store
      this.setProdStore(this.product);
      // get prod category
      this.setProdCategory(this.product);
      // get Reviews and score
      this.setReviewsAndScore(this.product);
      // check results
      console.log(this.product);
    });
  }

  async setReviewsAndScore(product: Product) {
    let score = 0;
    let scoreLenght = 0;
    let productReviews: ProductReview[] = new Array();
    const reviewRes = await this.tlacu.productReview.listProductReview(product.idProduct, null).toPromise();
    if (reviewRes.length > 0) {
      reviewRes.recordset.forEach( review => {
        const rev = new ProductReview(review);
        // set user to review
        this.tlacu.user.getUser(rev.fkUser).subscribe( user => {
          rev.user = new User(user.recordset);
          if (rev.review !== 'null' && rev.review !== 'undefined' && rev.review.length) {
            productReviews.push(rev);
          }
        });
        // get starts
        if (rev.stars != null && rev.stars > 0 && rev.stars < 6) {
          scoreLenght += 1;
          score += rev.stars;
        }
      });
      product.score = parseFloat((score / scoreLenght).toFixed(1));
      product.scoreLenght = scoreLenght;
      product.productReviews = productReviews;
    }
  }


  setProdStore(product: Product) {
    this.tlacu.store.getStore(product.fkStore).subscribe( res => {
      const store: Store = new Store(res.recordset[0]);
      product.store = store;
      // set the address
      this.setStoreAddress(product.store);
    });
  }
 // -------------- GET ADDRESS ------------------
 setStoreAddress(store: Store) {
  this.tlacu.address.getAddress(store.fkAddress).subscribe( res => {
    // set the address
    store.address = new Address(res.recordset[0]);

    // set the address enum
    this.setAddressEnum(store.address);

    // set the state enum //userAddress.address.stateEnum = res
    this.setStateEnum(store.address);

    // set the city enum  //userAddress.address.cityEnum = res
    this.setCityEnum(store.address);

    // set the suburb enum //userAddress.address.suburbEnum = res
    this.setSuburbEnum(store.address);
  }, err => {console.log(err); });
}

setAddressEnum(address: Address) {
  this.tlacu.adressEnum.getAddressEnum(address.fkAddressEnum).subscribe( res => {
    address.addressEnum = new AddressEnum(res.recordset[0]);
  });
}

setStateEnum(address: Address) {
  this.tlacu.stateEnum.getStateEnum(address.fkStateEnum).subscribe( res => {
    address.stateEnum = new StateEnum(res.recordset[0]);
  });
}

setCityEnum(address: Address) {
  this.tlacu.cityEnum.getCityEnum(address.fkCityEnum).subscribe( res => {
    address.cityEnum = new CityEnum(res.recordset[0]);
  });
}

setSuburbEnum(address: Address) {
  this.tlacu.suburbEnum.getSuburbEnum(address.fkSuburbEnum).subscribe( res => {
    address.suburbEnum = new SuburbEnum(res.recordset[0]);
  });
}
// -------------- GET ADDRESS END ------------------
  setProdCategory(product: Product) {
    this.tlacu.categoryEnum.listCategoryEnum(product.fkCategoryEnum, null).subscribe( res => {
      const cat: CategoryEnum = new CategoryEnum(res.recordset[0]);
      product.categoryEnum = cat;
    });
  }

  addCart(itemsAmount: string) {
    // no ha iniciado sesion ningun usuario
    if (this.idUser == null) { alert('Debe iniciar sesion para agregar prodictos a su carrito'); return; }
    // No ha seleccionado ninguna ubicación
    if (this.tlacu.manager.user.fkAddress == null) { alert('OOPS, por favor seleccione su ubucación actual'); return; }
    // El producto esta en distinta zona que el usuario
    if (this.tlacu.manager.user.address.fkCityEnum !== this.product.store.address.fkCityEnum) {
      alert('OOPS, no tenemos proveedores de este producto en tu zona');
      return;
    }
    console.log('adding to cart ');
    if (!parseInt(itemsAmount, 10)) { itemsAmount = '1'; }

    const orderProduct = new OrderProduct({amount: parseInt(itemsAmount, 10) , fkUser: this.idUser, fkProduct: this.product.idProduct});
    this.tlacu.orderProduct.createOrderProduct(orderProduct).subscribe( res => {
      console.log(res);
      if  (res.success) {
        alert('El producto se añadio a su carrito de TlacuBazar');
        this.tlacu.manager.cartEvent.next(1);
      } else {
        alert('Opps, algo salió mal. Intentelo más tarde');
      }
    });

  }

  goStore() {
    this.router.navigate(['/store/' + this.product.fkStore]);
  }

  // REVIEWS
  async  createReviewScore(product: Product, score: number) {

    // check if the suer had prevviously evaluate to remove that rate
    const pastReviewRes = await this.tlacu.productReview.listProductReview(product.idProduct, this.idUser).toPromise();
    if (pastReviewRes.length > 0) {
      pastReviewRes.recordset.forEach(review => {
        const rev = new ProductReview(review);
        if (rev.stars != null && rev.stars > 0) {
          this.tlacu.productReview.deleteProductReview(rev.idProductReview).subscribe( res => {console.log(res); });
        }
      });
    }
    // create new rate, alert
    const productReview = new ProductReview({stars: score,  fkProduct: product.idProduct, fkUser: this.idUser});
    this.tlacu.productReview.createProductReview(productReview).subscribe( res => {
      if (res.success) {
        // set review score again
        this.setReviewsAndScore(product); // should be new function. just calculate Score
        alert(`Calificación enviada. Si ya habias calificado a ${product.name} esa calificación sobrescribe la anterior`);
      } else {
        alert('oops! ocurrió un error');
      }
    });
  }

  createReviewText(product: Product, reviewText: string) {
    if (reviewText.length > 0) {
      const storeReview = new ProductReview({stars: 0, review: reviewText, fkProduct: product.idProduct, fkUser: this.idUser});
      this.tlacu.productReview.createProductReview(storeReview).subscribe( res => {
        if (res.success) {
          // success toast
          // this.showSuccess(dangerTpl);
          alert('Reseña enviada');
          // load reviews again
          this.setReviewsAndScore(product);
        } else {
          // error toast
          // this.showDanger(dangerTpl);
          alert('oops, ocurrio un error');
        }
      }, err => {alert('Error, favor de intentar más tarde'); });
    }
  }

  deleteReview(product: Product, idProductReview: number) {
    this.tlacu.productReview.deleteProductReview(idProductReview).subscribe( res => {
      this.setReviewsAndScore(product);
    });
  }
}
