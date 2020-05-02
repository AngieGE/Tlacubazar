export class Order {
    idOrder?: number;
    orderDate?:Date;
    status?:string;     //DEBERIA SER FK NO?  VER COMO CAMBIAR A ENUM
    comments?:string;
    totalPrice?:number;
    totalMaxCacaoPrice?: number;
    fkUser?:number;

    constructor(order: Order){
        this.idOrder=order.idOrder;
        this.orderDate=order.orderDate;
        this.status=order.status;
        this.comments=order.comments;
        this.totalPrice=order.totalPrice;
        this.totalMaxCacaoPrice=order.totalMaxCacaoPrice;
        this.fkUser=order.fkUser;
    }
}