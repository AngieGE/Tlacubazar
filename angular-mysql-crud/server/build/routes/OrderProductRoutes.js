"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
class OrderProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new OrderProductRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', index_1.OrderProductController.listOrderProduct);
        this.router.get('/:idOrderProduct', index_1.OrderProductController.getOrderProduct);
        this.router.post('/', index_1.OrderProductController.createOrderProduct);
        this.router.put('/:idOrderProduct', index_1.OrderProductController.updateOrderProduct);
        this.router.delete('/:idOrderProduct', index_1.OrderProductController.deleteOrderProduct);
    }
}
exports.OrderProductRoutes = OrderProductRoutes;
