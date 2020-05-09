"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class ProductReviewRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new ProductReviewRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.ProductReviewController.listProductReview);
        this.router.get('/:idProductReview', controllers_1.ProductReviewController.getProductReview);
        this.router.post('/', controllers_1.ProductReviewController.createProductReview);
        this.router.put('/:idProductReview', controllers_1.ProductReviewController.updateProductReview);
        this.router.delete('/:idProductReview', controllers_1.ProductReviewController.deleteProductReview);
    }
}
exports.ProductReviewRoutes = ProductReviewRoutes;
