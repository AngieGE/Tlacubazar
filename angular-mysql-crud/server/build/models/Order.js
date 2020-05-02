"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Order;
(function (_Order) {
    _Order.Status = {
        ESPERANDO_ENVIO: 'ESPERANDO_ENVIO',
        PAUSADA: 'PAUSADA',
        ENVIADA: 'ENVIADA',
        RECIBIDA: 'RECIBIDA',
        PAGADA: 'PAGADA',
        CANCELADA: 'CANCELADA'
    };
})(_Order = exports._Order || (exports._Order = {}));
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
