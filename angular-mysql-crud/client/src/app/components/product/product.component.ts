import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { User, Store, CategoryEnum, ProductReview, Product, Order, _StatusEnum } from 'src/app/models/index';
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
    console.log('get product');
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
          console.log(rev);
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
    });
  }

  setProdCategory(product: Product) {
    this.tlacu.categoryEnum.listCategoryEnum(product.fkCategoryEnum, null).subscribe( res => {
      const cat: CategoryEnum = new CategoryEnum(res.recordset[0]);
      product.categoryEnum = cat;
    });
  }

  addCart() {
    console.log("adding to cart");
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
      console.log(res);
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
      console.log(storeReview);
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
