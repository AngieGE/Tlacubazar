export class ProductReview {
    idProductReview?: number; //EN LA BASE DICE idStoreReview ESTA MAL
    stars?: number;
    review?:string;
    fkProduct?:number;
    fkUser?:number;

    constructor(productReview: ProductReview){
        this.idProductReview=productReview.idProductReview;
        this.stars=productReview.stars;
        this.review=productReview.review;
        this.fkProduct=productReview.fkProduct;
        this.fkUser=productReview.fkUser;
    }
}