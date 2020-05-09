"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class CityEnumController {
    static listCityEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCityEnum, city, fkStateEnum } = req.body; //req.body req.query req.params
            const _citiesEnum = yield services_1.CityEnumService.listCityEnum(idCityEnum, city, fkStateEnum);
            res.json({ "length": _citiesEnum.length, "recordset": _citiesEnum });
        });
    }
    static getCityEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCityEnum } = req.params; //req.body req.query req.params
            const _citiesEnum = yield services_1.CityEnumService.getCityEnum(parseInt(idCityEnum));
            res.json({ "length": _citiesEnum.length, "recordset": _citiesEnum });
        });
    }
    static createCityEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cityEnum = req.body;
            const _createdCityEnum = yield services_1.CityEnumService.createCityEnum(cityEnum);
            let suc;
            if (_createdCityEnum.affectedRows < 1) {
                _createdCityEnum.message = "CityEnum was not created";
                suc = false;
            }
            else {
                _createdCityEnum.message = "CityEnum was created";
                suc = true;
            }
            res.json({ success: suc, createdCityEnum: _createdCityEnum });
        });
    }
    static updateCityEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCityEnum } = req.params;
            let cityEnum = req.body;
            const _updateCityEnum = yield services_1.CityEnumService.updateCityEnum(parseInt(idCityEnum), cityEnum);
            let suc;
            if (_updateCityEnum.affectedRows < 1) {
                _updateCityEnum.message = 'the CityEnum was not updated ';
                suc = false;
            }
            else {
                _updateCityEnum.message = 'the CityEnum was updated ';
                suc = true;
            }
            res.json({ success: suc, updateCityEnum: _updateCityEnum });
        });
    }
    static deleteCityEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCityEnum } = req.params;
            const _deleteCityEnum = yield services_1.CityEnumService.deleteCityEnum(parseInt(idCityEnum));
            let suc;
            if (_deleteCityEnum.affectedRows < 1) {
                _deleteCityEnum.message = 'the CityEnum was not deleted ';
                suc = false;
            }
            else {
                _deleteCityEnum.message = 'the CityEnum was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteCityEnum: _deleteCityEnum });
        });
    }
}
exports.CityEnumController = CityEnumController;
