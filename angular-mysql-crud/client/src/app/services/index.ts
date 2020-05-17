export * from './address-enum.service';
export * from './address.service';
export * from './city-enum.service';
export * from './delivery-method.service';
export * from './order.service';
export * from './order-details.service';
export * from './payment.service';
export * from './product.service';
export * from './product-review.service';
export * from './state-enum.service';
export * from './store.service';
export * from './store-review.service';
export * from './suburb-enum.service';
export * from './user-address.service';
export * from './user.service';
export * from './manager.service';

import { AddressEnumService } from './address-enum.service';
import { AddressService } from './address.service';
import { CityEnumService } from './city-enum.service';
import { DeliveryMethodService } from './delivery-method.service';
import { OrderService } from './order.service';
import { OrderDetailsService } from './order-details.service';
import { PaymentService } from './payment.service';
import { ProductService } from './product.service';
import { StateEnumService } from './state-enum.service';
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
        public user: UserService,

        public adressEnum: AddressEnumService,
        public cityEnum: CityEnumService,
        public deliveryMethod: DeliveryMethodService,
        public order: OrderService,
        public orderDetails: OrderDetailsService,
        public payment: PaymentService,
        public productService: ProductService,
        public stateEnumService: StateEnumService,
    ) { }

}

