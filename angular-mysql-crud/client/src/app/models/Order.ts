import { StateEnum } from './StateEnum';
import {  User } from './User';
import { Product} from './Product';

export class Order {
    idOrder?: number;
    orderDate?: Date;
    fkStatusEnum?: number;
    comments?: string;
    totalPrice?: number;
    totalMaxCacaoPrice?: number;
    fkUser?: number;
    fkProduct?: number;

    // has
    statusEnum?: StateEnum;
    user?: User;
    product?: Product;

    constructor(order?: Order){
      if (order != null) {
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
}
