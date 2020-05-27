import { Product, Order } from './index';
import { CityEnum } from './CityEnum';

export class OrderProduct {
  idOrderProduct?: number;
  cacaoAmount?: number;
  amount?: number;
  date?: string;
  fkUser?: number;
  fkProduct?: number;
  fkStatusEnum?: number;

    // has
    order?: Order;
    product?: Product;

    // extra
    selected?: boolean = false;
    cityEnum?: CityEnum;

    constructor(orderProduct?: OrderProduct ) {
      if (orderProduct != null) {
        this.idOrderProduct = orderProduct.idOrderProduct;
        this.cacaoAmount = orderProduct.cacaoAmount;
        this.amount = orderProduct.amount;
        this.date = orderProduct.date;
        this.fkUser = orderProduct.fkUser;
        this.fkProduct = orderProduct.fkProduct;
        this.fkStatusEnum = orderProduct.fkStatusEnum;
    }
    }
}
