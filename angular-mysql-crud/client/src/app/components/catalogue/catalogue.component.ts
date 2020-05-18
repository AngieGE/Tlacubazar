import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store } from '../../models/Store';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEnum } from 'src/app/models';

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

  getStores() {
    const iss = (this.isServiceStore) ? 1 : 0;
    const cacao = (this.onlyCacaoStores) ? 1 : null;
    this.stores = Array();
    this.tlacu.store.listStore(iss, cacao, null, null, null).subscribe(
      res => {
        res.recordset.forEach( store => {
          const newStore = new Store(store);
          // revisar que este en las categorias
          this.categories.forEach( cat => {
            if (cat.selected && newStore.fkCategoryEnum === cat.idCategoryEnum) {
              this.stores.push( newStore);
            }
          });

        });
      },
      err => { console.log(err); }
    );
  }

  getCategories() {
    this.tlacu.categoryEnum.listCategoryEnum().subscribe(res => {
      res.recordset.forEach( cat => {
        this.categories.push(new CategoryEnum(cat));
      });
    });
  }

  open(content) {
    if (this.tlacu.manager.user !== null) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/login']);
    }
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

}
