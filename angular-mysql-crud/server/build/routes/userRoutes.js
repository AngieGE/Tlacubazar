"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new UserRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/login', controllers_1.UserController.login);
        this.router.get('/', controllers_1.UserController.listUser);
        this.router.get('/:idUser', controllers_1.UserController.getUser);
        this.router.post('/', controllers_1.UserController.createUser);
        this.router.put('/:idUser', controllers_1.UserController.updateUser);
        this.router.delete('/:idUser', controllers_1.UserController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
