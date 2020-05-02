"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderDetails {
    constructor(orderDetails) {
        this.idOrderDetails = orderDetails.idOrderDetails;
        this.quantityOrdered = orderDetails.quantityOrdered;
        this.fkOrder = orderDetails.fkOrder;
        this.fkProduct = orderDetails.fkProduct;
    }
}
exports.OrderDetails = OrderDetails;
