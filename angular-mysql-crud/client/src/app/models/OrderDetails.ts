import { Product, Order } from './index';

export class OrderDetails {
    idOrderDetails?: number;
    quantityOrdered?: number;
    fkOrder?: number;
    fkProduct?: number;

    // has
    order: Order;
    product: Product;

    constructor(orderDetails?: OrderDetails ) {
      if (orderDetails != null) {
        this.idOrderDetails = orderDetails.idOrderDetails;
        this.quantityOrdered = orderDetails.quantityOrdered;
        this.fkOrder = orderDetails.fkOrder;
        this.fkProduct = orderDetails.fkProduct;
      }
    }
}
