"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
        //this.router.get('/', StoreController.listUser);
        //this.router.post('/', StoreController.createUser);
        //this.router.put('/:idStore', StoreController.updateUser);
        //this.router.delete('/:idStore', StoreController.deleteUser);
    }
}
exports.StoreRoutes = StoreRoutes;
