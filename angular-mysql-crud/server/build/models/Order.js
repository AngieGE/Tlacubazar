"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(order) {
        this.idOrder = order.idOrder;
        this.orderDate = order.orderDate;
        this.fkStatusEnum = order.fkStatusEnum;
        this.comments = order.comments;
        this.totalPrice = order.totalPrice;
        this.totalMaxCacaoPrice = order.totalMaxCacaoPrice;
        this.fkUser = order.fkUser;
        this.fkProduct = order.fkProduct;
    }
}
exports.Order = Order;
