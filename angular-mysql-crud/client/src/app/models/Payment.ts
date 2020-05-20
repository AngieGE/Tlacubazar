import { User } from './User';
import {  Order } from './Order';

export class Payment {
    idPayment?: number;
    paymentDate?: Date;
    amount?: number;
    cacaoAmount?: number;
    fkClient?: number;
    fkVendor?: number;
    fkOrder?: number;

    // has
    client: User;
    vendor: User;
    order: Order;

    constructor(payment?: Payment){
      if (payment != null) {
        this.idPayment = payment.idPayment;
        this.paymentDate = payment.paymentDate;
        this.amount = payment.amount;
        this.cacaoAmount = payment.cacaoAmount;
        this.fkClient = payment.fkClient;
        this.fkVendor = payment.fkVendor;
        this.fkOrder = payment.fkOrder;
      }
    }
}
