export class StoreReview {
    idStoreReview?: number; //EN LA BASE DICE idStoreReview ESTA MAL
    starts?: number;
    review?:string;
    fkStore?:number;
    fkUser?:number;

    constructor(productReview: StoreReview){
        this.idStoreReview=productReview.idStoreReview;
        this.starts=productReview.starts;
        this.review=productReview.review;
        this.fkStore=productReview.fkStore;
        this.fkUser=productReview.fkUser;
    }
}