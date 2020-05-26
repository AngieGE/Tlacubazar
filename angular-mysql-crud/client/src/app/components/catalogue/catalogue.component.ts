import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEnum, User, StoreReview, Address, Store,
        AddressEnum, CityEnum, StateEnum, SuburbEnum } from 'src/app/models';

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
  // rating config
  selected = 0;
  hovered = 0;
  readonly = false;
  idUser;
  userAddress: Address;

  constructor(private tlacu: TlacuServices, private router: Router,
              config: NgbModalConfig, private modalService: NgbModal) {

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
    config.size = 'lg';

    // init arrays
    this.stores = Array();
    this.categories = Array();
    this.selectedStore = null;
    this.idUser = (this.tlacu.manager.user != null) ? this.tlacu.manager.user.idUser : null;
    this.userAddress = (this.tlacu.manager.user) ? this.tlacu.manager.user.address : null;
    // start all
    this.getCategories();
    this.getStores();
    console.log(this.userAddress);
  }

  ngOnInit(): void {
    this.tlacu.manager.updateCurrentUserAddress.subscribe(
      state => {
        this.idUser = (this.tlacu.manager.user != null) ? this.tlacu.manager.user.idUser : null;
        this.userAddress = (this.tlacu.manager.user) ? this.tlacu.manager.user.address : null;
        console.log('event catalogue');
        this.getStores();
      });
  }

   async getStores() {
    const iss = (this.isServiceStore) ? 1 : 0;
    const cacao = (this.onlyCacaoStores) ? 1 : null;
    console.log("cacao store " + cacao);
    let storesTemp: Store[] = Array();
    const storesRes = await this.tlacu.store.listStore(iss, cacao, null, null, null).toPromise();
    if (storesRes.length <= 0) {
      this.stores = Array();
      return;
    }
    storesRes.recordset.forEach(store => {
      // revisar que este en las categorias
      this.categories.forEach( cat => {
        if (cat.selected && store.fkCategoryEnum === cat.idCategoryEnum) {
          const s = new Store(store);
          // set the vendor
          this.setVendor(s);
          // set the category
          this.setCategory(s);
          // set the reviews and score
          this.setReviewsAndScore(s);
          // set address
          this.setStoreAddress(s, storesTemp);
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

  // -------------- GET ADDRESS ------------------

    setStoreAddress(store: Store, storesTemp) {
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

        // check if city is same as user city
        if (this.userAddress == null || this.userAddress.fkCityEnum == null) {
          console.log('no hay usuario');
          storesTemp.push(store);
        } else {
          console.log(store.address.fkCityEnum);
          if (this.userAddress.fkCityEnum === store.address.fkCityEnum) {
            console.log('es el mismo');
            storesTemp.push(store);
          } else {
            console.log('no es el mismo');
          }
        }
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

  createReviewText(store: Store, reviewText: string) {
    if (reviewText.length > 0) {
      const storeReview = new StoreReview({stars: 0, review: reviewText, fkStore: store.idStore, fkUser: this.idUser});
      console.log(storeReview);
      this.tlacu.storeReview.createStoreReview(storeReview).subscribe( res => {
        if (res.success) {
          // success toast
          // this.showSuccess(dangerTpl);
          alert('Reseña enviada');
          // load reviews again
          this.setReviewsAndScore(store);
        } else {
          // error toast
          // this.showDanger(dangerTpl);
          alert('oops, ocurrio un error');
        }
      }, err => {alert('Error, favor de intentar más tarde'); });
    }
  }

  deleteReview(store: Store, idStoreReview: number) {
    this.tlacu.storeReview.deleteStoreReview(idStoreReview).subscribe( res => {
      // alert('Comentario eliminado exitosamente');
      this.setReviewsAndScore(store);
    });
  }

 async  createReviewScore(store: Store, score: number) {
    // check if the suer had prevviously evaluate to remove that rate
    const pastReviewRes = await this.tlacu.storeReview.listStoreReview(store.idStore, this.idUser).toPromise();
    if (pastReviewRes.length > 0) {
      pastReviewRes.recordset.forEach(review => {
        const rev = new StoreReview(review);
        if (rev.stars != null && rev.stars > 0) {
          rev.stars = score;
          this.tlacu.storeReview.deleteStoreReview(rev.idStoreReview).subscribe( res => {console.log(res); });
        }
      });
    }
    // create new rate, alert
    const storeReview = new StoreReview({stars: score,  fkStore: store.idStore, fkUser: this.idUser});
    this.tlacu.storeReview.createStoreReview(storeReview).subscribe( res => {
      console.log(res);
      if (res.success) {
        // set review score again
        this.setReviewsAndScore(store); // should be new function. just calculate Score
        alert(`Calificación enviada. Si ya habias calificado a ${store.name} esa calificación sobrescribe la anterior`);
      } else {
        alert('oops! ocurrió un error');
      }
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  seeStoreDetails(store: Store) {
    this.router.navigate(['/store/' + store.idStore]);
  }

  // https://ng-bootstrap.github.io/#/components/toast/examples
  showSuccess(dangerTpl) {
    //this.tlacu.toastService.show(dangerTpl, { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    //this.tlacu.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

}
