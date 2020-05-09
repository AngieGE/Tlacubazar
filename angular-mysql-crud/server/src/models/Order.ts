export class Order {
    idOrder?: number;
    orderDate?:Date;
    fkStatusEnum?:number; 
    comments?:string;
    totalPrice?:number;
    totalMaxCacaoPrice?: number;
    fkUser?:number;

    constructor(order: Order){
        this.idOrder=order.idOrder;
        this.orderDate=order.orderDate;
        this.fkStatusEnum=order.fkStatusEnum;
        this.comments=order.comments;
        this.totalPrice=order.totalPrice;
        this.totalMaxCacaoPrice=order.totalMaxCacaoPrice;
        this.fkUser=order.fkUser;
    }
}