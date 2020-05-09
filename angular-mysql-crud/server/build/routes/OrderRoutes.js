"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
class OrderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new OrderRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', index_1.OrderController.listOrder);
        this.router.get('/:idOrder', index_1.OrderController.getOrder);
        this.router.post('/', index_1.OrderController.createOrder);
        this.router.put('/:idOrder', index_1.OrderController.updateOrder);
        this.router.delete('/:idOrder', index_1.OrderController.deleteOrder);
    }
}
exports.OrderRoutes = OrderRoutes;
