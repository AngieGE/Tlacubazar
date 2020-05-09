"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class StoreReviewRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new StoreReviewRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.StoreReviewController.listStoreReview);
        this.router.get('/:idStoreReview', controllers_1.StoreReviewController.getStoreReview);
        this.router.post('/', controllers_1.StoreReviewController.createStoreReview);
        this.router.put('/:idStoreReview', controllers_1.StoreReviewController.updateStoreReview);
        this.router.delete('/:idStoreReview', controllers_1.StoreReviewController.deleteStoreReview);
    }
}
exports.StoreReviewRoutes = StoreReviewRoutes;
