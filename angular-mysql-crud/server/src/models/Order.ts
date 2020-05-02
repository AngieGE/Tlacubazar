export namespace _Order {
    export type Status ='ESPERANDO_ENVIO'| 'PAUSADA'|'ENVIADA'| 'RECIBIDA'| 'PAGADA'| 'CANCELADA';
    export const Status = {
        ESPERANDO_ENVIO: 'ESPERANDO_ENVIO' as Status,
        PAUSADA: 'PAUSADA' as Status,
        ENVIADA: 'ENVIADA' as Status,
        RECIBIDA: 'RECIBIDA' as Status,
        PAGADA: 'PAGADA' as Status,
        CANCELADA: 'CANCELADA' as Status
    };

}

export class Order {
    idOrder?: number;
    orderDate?:Date;
    status?:_Order.Status; 
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