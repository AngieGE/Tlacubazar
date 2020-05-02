"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class StoreRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new StoreRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.StoreController.listUser);
        this.router.post('/', controllers_1.StoreController.createUser);
        this.router.put('/:idStore', controllers_1.StoreController.updateUser);
        this.router.delete('/:idStore', controllers_1.StoreController.deleteUser);
    }
}
exports.StoreRoutes = StoreRoutes;
