import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store } from '../../models/Store';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEnum, User, StoreReview } from 'src/app/models';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CatalogueComponent implements OnInit {
  stores: Store[];
  isServiceStore: boolean;
  categories: CategoryEnum[];
  onlyCacaoStores = false;
  selectedStore: Store;
  constructor(private tlacu: TlacuServices, private router: Router,
              config: NgbModalConfig, private modalService: NgbModal ) {

    // check URL
    if (this.router.url === '/catalogue/product') {
      this.isServiceStore =  false;
    } else if (this.router.url === '/catalogue') {
      this.isServiceStore =  false;
      this.router.navigate(['/catalogue/product']);
    } else {
      this.isServiceStore =  true;
    }

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

    // init arrays
    this.stores = Array();
    this.categories = Array();
    this.selectedStore = null;

    // start all
    this.getCategories();
    this.getStores();
  }

  ngOnInit(): void {}

   async getStores() {
    const iss = (this.isServiceStore) ? 1 : 0;
    const cacao = (this.onlyCacaoStores) ? 1 : null;
    let storesTemp: Store[] = Array();
    const storesRes = await this.tlacu.store.listStore(iss, cacao, null, null, null).toPromise();
    if (storesRes.length <= 0) { return; }
    storesRes.recordset.forEach(store => {
      // revisar que este en las categorias
      this.categories.forEach( cat => {
        if (cat.selected && store.fkCategoryEnum === cat.idCategoryEnum) {
          const s = new Store(store);
          // set the vendor
          this.setVendor(s);
          // set the category
          this.setCategory(s);
          // set the reviews
          this.setReviews(s);
          // store it in temp array
          storesTemp.push(s);
        }
      });
    });
    this.stores = storesTemp;
    console.log(this.stores);
  }

  async setVendor(store: Store) {
    const vendorRes = await this.tlacu.user.getUser(store.fkVendor).toPromise();
    store.vendor = new User(vendorRes.recordset);
  }

  async setCategory(store: Store) {
    const categoryRes = await this.tlacu.categoryEnum.listCategoryEnum(store.fkCategoryEnum, null).toPromise();
    store.categoryEnum = new CategoryEnum(categoryRes.recordset[0]);
  }

  async setReviews(store: Store) {
    const reviewRes = await this.tlacu.storeReview.listStoreReview(store.idStore, null).toPromise();
    if (reviewRes.length > 0) {
      reviewRes.recordset.forEach( review => {
        const rev = new StoreReview(review);
        // set user
        this.tlacu.user.getUser(rev.fkUser).subscribe( user => {
          rev.user = new User(user.recordset);
          store.storeReviews.push(rev);
        });
      });
    }
  }

  getCategories() {
    this.tlacu.categoryEnum.listCategoryEnum().subscribe(res => {
      res.recordset.forEach( cat => {
        this.categories.push(new CategoryEnum(cat));
      });
    });
  }

  setAllCategories(select: boolean) {
    this.categories.forEach( cat => {
      cat.selected = select;
    });
  }

  applyFiler() {
    console.log("filter");
    this.getStores();
  }

  setSelectedStore(store: Store) {
    this.selectedStore = store;
  }

  open(content) {
    this.modalService.open(content);
  }

}
