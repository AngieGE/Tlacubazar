"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorePaymentMethod {
    constructor(storePaymentMethod) {
        this.fkStore = storePaymentMethod.fkStore;
        this.fkPaymentMethodEnum = storePaymentMethod.fkPaymentMethodEnum;
    }
}
exports.StorePaymentMethod = StorePaymentMethod;
