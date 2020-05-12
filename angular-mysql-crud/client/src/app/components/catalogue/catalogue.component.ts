import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { ServiceResponse } from 'src/app/models/serviceResponse/ServiceResponse';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  stores: any = [];
  serviceResponse: ServiceResponse;
  constructor(private storeService: StoreService ) { }

  ngOnInit(): void {
    this.storeService.listStore().subscribe(
      res => {
        this.serviceResponse = res;
        this.stores = this.serviceResponse.recordset;
        console.log(this.stores);
      },
      err => {
        console.log(err);
      }
    );
  }

}
