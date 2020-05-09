"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class PaymentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new PaymentRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.PaymentController.listPayment);
        this.router.get('/:idPayment', controllers_1.PaymentController.getPayment);
        this.router.post('/', controllers_1.PaymentController.createPayment);
        this.router.put('/:idPayment', controllers_1.PaymentController.updatePayment);
        this.router.delete('/:idPayment', controllers_1.PaymentController.deletePayment);
    }
}
exports.PaymentRoutes = PaymentRoutes;
