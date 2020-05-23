export class StorePaymentMethod {
    fkStore?: number; //EN LA BASE DICE idStoreReview ESTA MAL
    fkPaymentMethodEnum?: number;

    constructor(storePaymentMethod: StorePaymentMethod){
        this.fkStore=storePaymentMethod.fkStore;
        this.fkPaymentMethodEnum=storePaymentMethod.fkPaymentMethodEnum;
    }
}