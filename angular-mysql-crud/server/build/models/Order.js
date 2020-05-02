"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(order) {
        this.idOrder = order.idOrder;
        this.orderDate = order.orderDate;
        this.status = order.status;
        this.comments = order.comments;
        this.totalPrice = order.totalPrice;
        this.totalMaxCacaoPrice = order.totalMaxCacaoPrice;
        this.fkUser = order.fkUser;
    }
}
exports.Order = Order;
