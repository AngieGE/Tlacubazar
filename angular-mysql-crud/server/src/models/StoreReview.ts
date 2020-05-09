export class StoreReview {
    idStoreReview?: number; //EN LA BASE DICE idStoreReview ESTA MAL
    stars?: number;
    review?:string;
    fkStore?:number;
    fkUser?:number;

    constructor(productReview: StoreReview){
        this.idStoreReview=productReview.idStoreReview;
        this.stars=productReview.stars;
        this.review=productReview.review;
        this.fkStore=productReview.fkStore;
        this.fkUser=productReview.fkUser;
    }
}