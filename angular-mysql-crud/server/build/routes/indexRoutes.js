"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRouter();
exports.default = indexRoutes.router;
