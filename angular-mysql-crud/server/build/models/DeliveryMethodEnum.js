"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeliveryMethodEnum {
    constructor(deliveryMethod) {
        this.idDeliveryMethodEnum = deliveryMethod.idDeliveryMethodEnum;
        this.DeliveryMethod = deliveryMethod.DeliveryMethod;
    }
}
exports.DeliveryMethodEnum = DeliveryMethodEnum;
var _DeliveryMethodEnum;
(function (_DeliveryMethodEnum) {
    _DeliveryMethodEnum.DeliveryMethodEnum = {
        MOTO: 'MOTO',
        TAXI: 'TAXI',
    };
})(_DeliveryMethodEnum = exports._DeliveryMethodEnum || (exports._DeliveryMethodEnum = {}));
