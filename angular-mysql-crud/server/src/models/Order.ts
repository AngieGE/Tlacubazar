export class Order {
    idOrder?: number;
    orderDate?:Date;
    comments?:string;
    fkUser?:number;
    fkStore?: number;
    fkStatusEnum?:number;
    fkPaymentMethodEnum?:number;

    constructor(order: Order){
        this.idOrder=order.idOrder;
        this.orderDate=order.orderDate;
        this.comments=order.comments;
        this.fkUser=order.fkUser;
        this.fkStore=order.fkStore;
        this.fkStatusEnum=order.fkStatusEnum;
        this.fkPaymentMethodEnum=order.fkPaymentMethodEnum;
    }
}