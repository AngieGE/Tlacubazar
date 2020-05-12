import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/Store';
import {Router} from '@angular/router';@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  stores: Store[];
  isServiceStore: number;

  constructor(private storeService: StoreService, private router: Router ) {
    if (this.router.url === '/catalogue/product') {
      this.isServiceStore =  0;
    } else if (this.router.url === '/catalogue') {
      this.isServiceStore =  0;
      this.router.navigate(['/catalogue/product']);
    } else {
      this.isServiceStore =  1;
    }
  }

  ngOnInit(): void {
    this.getStores(this.isServiceStore);
  }

  getStores(isServiceStore: number) {
    this.storeService.listStore(isServiceStore, null, null, null).subscribe(
      res => {
        this.stores = res.recordset;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
