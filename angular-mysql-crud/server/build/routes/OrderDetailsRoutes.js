"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
class OrderDetailsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new OrderDetailsRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', index_1.OrderDetailsController.listOrderDetails);
        this.router.get('/:idOrderDetails', index_1.OrderDetailsController.getOrderDetails);
        this.router.post('/', index_1.OrderDetailsController.createOrderDetails);
        this.router.put('/:idOrderDetails', index_1.OrderDetailsController.updateOrderDetails);
        this.router.delete('/:idOrderDetails', index_1.OrderDetailsController.deleteOrderDetails);
    }
}
exports.OrderDetailsRoutes = OrderDetailsRoutes;
