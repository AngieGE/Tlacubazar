//Table NxN 
//Store <-> Delivery Method Enum
export class DeliveryMethod {
    fkStore?:number;
    fkDeliveryMethodEnum?:number;

    constructor(deliveryMethod: DeliveryMethod){
        this.fkStore = deliveryMethod.fkStore;
        this.fkDeliveryMethodEnum = deliveryMethod.fkDeliveryMethodEnum;
    }
}