import { Product, Order } from './index';

export class OrderProduct {
  idOrderProduct?: number;
  cacaoAmount?: number;
  amount?: number;
  date?: Date;
  fkUser?: number;
  fkProduct?: number;

    // has
    order: Order;
    product: Product;

    constructor(orderProduct?: OrderProduct ) {
      if (orderProduct != null) {
        this.idOrderProduct = orderProduct.idOrderProduct;
        this.cacaoAmount = orderProduct.cacaoAmount;
        this.amount = orderProduct.amount;
        this.date = orderProduct.date;
        this.fkUser = orderProduct.fkUser;
        this.fkProduct = orderProduct.fkProduct;
    }
    }
}
