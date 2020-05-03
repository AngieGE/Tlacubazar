"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class SuburbEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new SuburbEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.SuburbEnumController.listSuburbEnum);
        this.router.post('/', controllers_1.SuburbEnumController.createSuburbEnum);
        this.router.put('/:idSuburbEnum', controllers_1.SuburbEnumController.updateSuburbEnum);
        this.router.delete('/:idSuburbEnum', controllers_1.SuburbEnumController.deleteSuburbEnum);
    }
}
exports.SuburbEnumRoutes = SuburbEnumRoutes;
