"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class PaymentMethodEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new PaymentMethodEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.PaymentMethodController.listPaymentMethodEnum);
        this.router.post('/', controllers_1.PaymentMethodController.createPaymentMethodEnum);
        //this.router.put('/:fkStore/:fkPaymentMethodEnum', PaymentMethodController.updatePaymentMethod);
        this.router.delete('/:fkStore/:fkPaymentMethodEnum', controllers_1.PaymentMethodController.deletePaymentMethodEnum);
    }
}
exports.PaymentMethodEnumRoutes = PaymentMethodEnumRoutes;
