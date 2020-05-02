"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductReview {
    constructor(productReview) {
        this.idProductReview = productReview.idProductReview;
        this.starts = productReview.starts;
        this.review = productReview.review;
        this.fkProduct = productReview.fkProduct;
        this.fkUser = productReview.fkUser;
    }
}
exports.ProductReview = ProductReview;
