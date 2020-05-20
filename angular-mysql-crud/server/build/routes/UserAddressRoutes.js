"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class UserAddressRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new UserAddressRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.UserAddressController.listUserAddress);
        this.router.post('/', controllers_1.UserAddressController.createUserAddress);
        this.router.delete('/:fkAddress/:fkUser', controllers_1.UserAddressController.deleteUserAddress);
    }
}
exports.UserAddressRoutes = UserAddressRoutes;
