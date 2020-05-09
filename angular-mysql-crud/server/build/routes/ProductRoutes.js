"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new ProductRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.ProductController.listProduct);
        this.router.get('/:idProduct', controllers_1.ProductController.getProduct);
        this.router.post('/', controllers_1.ProductController.createProduct);
        this.router.put('/:idProduct', controllers_1.ProductController.updateProduct);
        this.router.delete('/:idProduct', controllers_1.ProductController.deleteProduct);
    }
}
exports.ProductRoutes = ProductRoutes;
