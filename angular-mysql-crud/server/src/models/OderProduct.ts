export class OrderProduct {
    idOrderProduct?:number;
    cacaoAmount?:number;
    amount?:number;
    date?: Date;
    fkUser?: number;
    fkProduct?: number;
    fkStatusEnum?: number;

    constructor(orderProduct: OrderProduct ){
        this.idOrderProduct=orderProduct.idOrderProduct;
        this.cacaoAmount=orderProduct.cacaoAmount;
        this.amount=orderProduct.amount;
        this.date=orderProduct.date;
        this.fkUser=orderProduct.fkUser;
        this.fkProduct=orderProduct.fkProduct;
        this.fkStatusEnum=orderProduct.fkStatusEnum;
    }
}