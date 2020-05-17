export * from './address-enum.service';
export * from './city-enum.service';
export * from './delivery-method.service';
export * from './order.service';
// export * from './order-details.service';
// export * from './payment.service';
// export * from './product.service';
export * from './product-review.service';
// export * from './state-enum.service';
export * from './store.service';
export * from './store-review.service';
export * from './suburb-enum.service';
export * from './user-address.service';
export * from './user.service';

import { AddressService } from './address.service';
import { ManagerService } from './manager.service';
import { ProductReviewService } from './product-review.service';
import { StoreReviewService } from './store-review.service';
import { StoreService } from './store.service';
import { SuburbEnumService } from './suburb-enum.service';
import { UserAddressService } from './user-address.service';
import { UserService } from './user.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TlacuServices {

    constructor(
        public manager: ManagerService,
        public address: AddressService,
        public productReview: ProductReviewService,
        public storeReview: StoreReviewService,
        public store: StoreService,
        public suburbEnum: SuburbEnumService,
        public userAddress: UserAddressService,
        public user: UserService
    ) { }

}

