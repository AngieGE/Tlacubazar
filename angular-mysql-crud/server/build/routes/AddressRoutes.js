"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class AddressRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new AddressRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.AddressController.listAddress);
        this.router.get('/:idAddress', controllers_1.AddressController.getAddress);
        this.router.post('/', controllers_1.AddressController.createAddress);
        this.router.put('/:idAddress', controllers_1.AddressController.updateAddress);
        this.router.delete('/:idAddress', controllers_1.AddressController.deleteAddress);
    }
}
exports.AddressRoutes = AddressRoutes;
