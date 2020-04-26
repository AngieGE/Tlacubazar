"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //cuando entren en la ruta inicial yo envio un mensaje hello
        this.router.get('/', UserController_1.default.list);
        this.router.get('/:id', UserController_1.default.getOne);
        this.router.post('/', UserController_1.default.create);
        this.router.delete('/:id', UserController_1.default.delete);
        this.router.put('/:id', UserController_1.default.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
