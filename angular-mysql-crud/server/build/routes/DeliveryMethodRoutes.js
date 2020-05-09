"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class DeliveryMethodRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new DeliveryMethodRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.DeliveryMethodController.listDeliveryMethod);
        this.router.post('/', controllers_1.DeliveryMethodController.createDeliveryMethod);
        //this.router.put('/:fkStore/:fkDeliveryMethodEnum', DeliveryMethodController.updateDeliveryMethod);
        this.router.delete('/:fkStore/:fkDeliveryMethodEnum', controllers_1.DeliveryMethodController.deleteDeliveryMethod);
    }
}
exports.DeliveryMethodRoutes = DeliveryMethodRoutes;
