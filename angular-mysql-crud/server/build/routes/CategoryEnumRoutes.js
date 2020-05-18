"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class CategoryEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new CategoryEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.CategoryEnumController.listCategoryEnum);
    }
}
exports.CategoryEnumRoutes = CategoryEnumRoutes;
