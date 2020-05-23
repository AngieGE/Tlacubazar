
export class PaymentMethodEnum {
    idPaymentMethodEnum?:number;
    paymentMethod?:string;

    constructor(paymentMethodEnum: PaymentMethodEnum){
        this.idPaymentMethodEnum = paymentMethodEnum.idPaymentMethodEnum;
        this.paymentMethod = paymentMethodEnum.paymentMethod;
    }
}