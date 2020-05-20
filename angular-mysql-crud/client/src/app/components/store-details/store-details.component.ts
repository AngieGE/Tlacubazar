import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { User, Store, CategoryEnum, StoreReview, Product, Address } from 'src/app/models/index';
import { SocialUser } from 'angularx-social-login';
import { faEdit, faTrashAlt, faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  // icons
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  // user
  user: User;
  store: Store = new Store();
  // products
  products: Product[] = new Array();
  storeAddress: Address;

  constructor(private tlacu: TlacuServices, private router: Router,  private activatedRoute: ActivatedRoute ) {
    this.user = this.tlacu.manager.user;
    const idStore = +this.activatedRoute.snapshot.paramMap.get('idStore');
    // get store
    this.getStoreDetails(idStore);
    // get dtore products
    this.getProducts();
  }

  ngOnInit(): void {

  }

  async getStoreDetails(idStore: number) {
    console.log('Get details');
    const storeRes = await this.tlacu.store.getStore(idStore).toPromise();
    this.store = new Store(storeRes.recordset[0]);
    // set the vendor
    this.setVendor(this.store);
    // set the category
    this.setCategory(this.store);
    // set the reviews and score
    this.setReviewsAndScore(this.store);
    // set the address

  }

  goProduct(idProduct: number) {
    this.router.navigate([`/product/${idProduct}`]);
  }

  // async setStoreAddress(store: Store){
  //  const address = await this.tlacu.address.getAddress(this.store.fkAddress).toPromise;
  //  this.storeAddress = new Address(address)
  // }

  async setVendor(store: Store) {
    const vendorRes = await this.tlacu.user.getUser(store.fkVendor).toPromise();
    store.vendor = new User(vendorRes.recordset);
  }

  async setCategory(store: Store) {
    const categoryRes = await this.tlacu.categoryEnum.listCategoryEnum(store.fkCategoryEnum, null).toPromise();
    store.categoryEnum = new CategoryEnum(categoryRes.recordset[0]);
  }

  async setReviewsAndScore(store: Store) {
    let score = 0;
    let scoreLenght = 0;
    let storeReviews: StoreReview[] = new Array();
    const reviewRes = await this.tlacu.storeReview.listStoreReview(store.idStore, null).toPromise();
    if (reviewRes.length > 0) {
      reviewRes.recordset.forEach( review => {
        const rev = new StoreReview(review);
        // set user
        this.tlacu.user.getUser(rev.fkUser).subscribe( user => {
          rev.user = new User(user.recordset);
          if (rev.review !== 'null' && rev.review !== 'undefined' && rev.review.length) {
            storeReviews.push(rev);
          }
        });
        // get starts
        if (rev.stars != null && rev.stars > 0 && rev.stars < 6) {
          scoreLenght += 1;
          score += rev.stars;
        }
      });
      store.score = parseFloat((score / scoreLenght).toFixed(1));
      store.scoreLenght = scoreLenght;
      store.storeReviews = storeReviews;
    }
  }


  async getProducts() {
    const productsRes = await this.tlacu.product.listProduct(null, this.store.idStore, null).toPromise();
    if (productsRes.length > 0) {
      console.log(productsRes.length + ' products');
      productsRes.recordset.forEach( product => {
        const prod = new Product(product);
        // set category
        this.setProductCategory(prod);
        // push it into the array
        this.products.push(prod);
    });
      console.log(this.products);
    } else {
      console.log('no products');
    }
  }

  setProductCategory(product: Product) {
    this.tlacu.categoryEnum.listCategoryEnum(product.fkCategoryEnum, null).subscribe( res => {
      const cat = new CategoryEnum(res.recordset[0]);
      product.categoryEnum = cat;
    });

  }
}
