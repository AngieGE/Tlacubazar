"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class StateEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new StateEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.StateEnumController.listStateEnum);
        this.router.get('/:idStateEnum', controllers_1.StateEnumController.getStateEnum);
        this.router.post('/', controllers_1.StateEnumController.createStateEnum);
        this.router.put('/:idStateEnum', controllers_1.StateEnumController.updateStateEnum);
        this.router.delete('/:idStateEnum', controllers_1.StateEnumController.deleteStateEnum);
    }
}
exports.StateEnumRoutes = StateEnumRoutes;
