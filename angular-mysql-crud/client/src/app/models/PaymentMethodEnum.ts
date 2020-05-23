export class PaymentMethodEnum {
  idPaymentMethodEnum?: number;
  paymentMethod?: _PaymentMethodEnum.PaymentMethodEnum;

  constructor(paymentMethodEnum?: PaymentMethodEnum) {
    if (paymentMethodEnum != null) {
      this.idPaymentMethodEnum = paymentMethodEnum.idPaymentMethodEnum,
      this.paymentMethod = paymentMethodEnum.paymentMethod;
    }
  }
}

export namespace _PaymentMethodEnum {
  export type PaymentMethodEnum  =  1 | 2 ;
    export const PaymentMethodEnum = {
        TARJETA: 1,
        EFECTIVO: 2
    };

}
