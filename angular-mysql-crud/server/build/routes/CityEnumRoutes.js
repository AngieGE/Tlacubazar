"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
class CityEnumRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new CityEnumRoutes();
        return this.instance;
    }
    config() {
        this.router.get('/', controllers_1.CityEnumController.listCityEnum);
        this.router.get('/:idCityEnum', controllers_1.CityEnumController.getCityEnum);
        this.router.post('/', controllers_1.CityEnumController.createCityEnum);
        this.router.put('/:idCityEnum', controllers_1.CityEnumController.updateCityEnum);
        this.router.delete('/:idCityEnum', controllers_1.CityEnumController.deleteCityEnum);
    }
}
exports.CityEnumRoutes = CityEnumRoutes;
