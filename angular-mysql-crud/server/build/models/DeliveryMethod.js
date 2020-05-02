"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Table NxN 
//Store <-> Delivery Method Enum
class DeliveryMethod {
    constructor(deliveryMethod) {
        this.fkStore = deliveryMethod.fkStore;
        this.fkDeliveryMethodEnum = deliveryMethod.fkDeliveryMethodEnum;
    }
}
exports.DeliveryMethod = DeliveryMethod;
