"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderProduct {
    constructor(orderProduct) {
        this.idOrderProduct = orderProduct.idOrderProduct;
        this.cacaoAmount = orderProduct.cacaoAmount;
        this.amount = orderProduct.amount;
        this.date = orderProduct.date;
        this.fkUser = orderProduct.fkUser;
        this.fkProduct = orderProduct.fkProduct;
        this.fkStatusEnum = orderProduct.fkStatusEnum;
    }
}
exports.OrderProduct = OrderProduct;
