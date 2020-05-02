"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor(payment) {
        this.idPayment = payment.idPayment;
        this.paymentDate = payment.paymentDate;
        this.amount = payment.amount;
        this.cacaoAmount = payment.cacaoAmount;
        this.fkClient = payment.fkClient;
        this.fkVendor = payment.fkVendor;
        this.fkOrder = payment.fkOrder;
    }
}
exports.Payment = Payment;
