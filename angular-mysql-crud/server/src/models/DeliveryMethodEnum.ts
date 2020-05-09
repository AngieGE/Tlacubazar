export class DeliveryMethodEnum {
    idDeliveryMethodEnum?:number;
    DeliveryMethod?:string;

    constructor(deliveryMethod: DeliveryMethodEnum){
        this.idDeliveryMethodEnum = deliveryMethod.idDeliveryMethodEnum;
        this.DeliveryMethod = deliveryMethod.DeliveryMethod;
    }
}
export namespace _DeliveryMethodEnum {
    export type DeliveryMethodEnum ='MOTO'| 'TAXI';
    export const DeliveryMethodEnum = {
        MOTO: 'MOTO' as DeliveryMethodEnum,
        TAXI: 'TAXI' as DeliveryMethodEnum,
  
    };

}