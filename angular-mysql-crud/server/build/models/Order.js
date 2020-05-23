"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(order) {
        this.idOrder = order.idOrder;
        this.orderDate = order.orderDate;
        this.comments = order.comments;
        this.fkUser = order.fkUser;
        this.fkStore = order.fkStore;
        this.fkStatusEnum = order.fkStatusEnum;
        this.fkPaymentMethodEnum = order.fkPaymentMethodEnum;
    }
}
exports.Order = Order;
