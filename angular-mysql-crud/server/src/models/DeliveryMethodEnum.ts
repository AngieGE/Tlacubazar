export class DeliveryMethodEnum {
    idDeliveryMethodEnum?:number;
    DeliveryMethod?:string;

    constructor(deliveryMethod: DeliveryMethodEnum){
        this.idDeliveryMethodEnum = deliveryMethod.idDeliveryMethodEnum;
        this.DeliveryMethod = deliveryMethod.DeliveryMethod;
    }
}