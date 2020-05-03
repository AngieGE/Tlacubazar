"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class AddressEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new AddressEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.AddressEnumController.listAddressEnum);
        this.router.post('/', controllers_1.AddressEnumController.createAddressEnum);
        this.router.put('/:idAddressEnum', controllers_1.AddressEnumController.updateAddressEnum);
        this.router.delete('/:idAddressEnum', controllers_1.AddressEnumController.deleteAddressEnum);
    }
}
exports.AddressEnumRoutes = AddressEnumRoutes;
