// Table NxN
import { Store, DeliveryMethodEnum } from './index';

// Store <-> Delivery Method Enum
export class DeliveryMethod {
    fkStore?: number;
    fkDeliveryMethodEnum?: number;

    // has
    store: Store;
    deliveryMethod: DeliveryMethodEnum;

    constructor(deliveryMethod?: DeliveryMethod) {
      if (deliveryMethod != null) {
        this.fkStore = deliveryMethod.fkStore;
        this.fkDeliveryMethodEnum = deliveryMethod.fkDeliveryMethodEnum;
      }
    }
}
