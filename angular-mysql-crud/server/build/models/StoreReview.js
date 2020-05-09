"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoreReview {
    constructor(productReview) {
        this.idStoreReview = productReview.idStoreReview;
        this.stars = productReview.stars;
        this.review = productReview.review;
        this.fkStore = productReview.fkStore;
        this.fkUser = productReview.fkUser;
    }
}
exports.StoreReview = StoreReview;
