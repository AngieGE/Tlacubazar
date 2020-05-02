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
        this.router.get('/', controllers_1.StoreController.listStore);
        this.router.post('/', controllers_1.StoreController.createStore);
        this.router.put('/:idStore', controllers_1.StoreController.updateStore);
        this.router.delete('/:idStore', controllers_1.StoreController.deleteStore);
    }
}
exports.StoreRoutes = StoreRoutes;
