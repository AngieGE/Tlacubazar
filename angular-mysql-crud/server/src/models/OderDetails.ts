export class OrderDetails {
    idOrderDetails?:number;
    quantityOrdered?:number;
    fkOrder?: number;
    fkProduct?: number;

    constructor(orderDetails: OrderDetails ){
        this.idOrderDetails=orderDetails.idOrderDetails;
        this.quantityOrdered=orderDetails.quantityOrdered;
        this.fkOrder=orderDetails.fkOrder;
        this.fkProduct=orderDetails.fkProduct;
    }
}