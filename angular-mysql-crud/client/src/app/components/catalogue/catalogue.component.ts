import { Component, OnInit } from '@angular/core';
import { TlacuServices } from '../../services/index';
import { Store } from '../../models/Store';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CatalogueComponent implements OnInit {
  stores: Store[];
  isServiceStore: boolean;
  public isCollapsed = false;
  constructor(private tlacu: TlacuServices, private router: Router,
              config: NgbModalConfig, private modalService: NgbModal ) {
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
  }

  ngOnInit(): void {
    this.getStores(this.isServiceStore);
  }

  getStores(isServiceStore: boolean) {
    const iss = (isServiceStore) ? 1 : 0;
    this.tlacu.store.listStore(iss, null, null, null, null).subscribe(
      res => {
        this.stores = res.recordset;
      },
      err => { console.log(err); }
    );
  }

  open(content) {
    if (this.tlacu.manager.user !== null) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
