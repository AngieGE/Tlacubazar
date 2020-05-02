export class ProductReview {
    idProductReview?: number; //EN LA BASE DICE idStoreReview ESTA MAL
    starts?: number;
    review?:string;
    fkProduct?:number;
    fkUser?:number;

    constructor(productReview: ProductReview){
        this.idProductReview=productReview.idProductReview;
        this.starts=productReview.starts;
        this.review=productReview.review;
        this.fkProduct=productReview.fkProduct;
        this.fkUser=productReview.fkUser;
    }
}