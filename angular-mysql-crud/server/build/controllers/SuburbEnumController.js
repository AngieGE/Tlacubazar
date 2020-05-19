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
class SuburbEnumController {
    static listSuburbEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idSuburbEnum, suburb, postalCode, fkCityEnum } = req.query; //req.body req.query req.params
            const _suburbsEnum = yield services_1.SuburbEnumService.listSuburbEnum(idSuburbEnum, suburb, postalCode, fkCityEnum);
            res.json({ length: _suburbsEnum.length, recordset: _suburbsEnum });
        });
    }
    static getSuburbEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idSuburbEnum } = req.params; //req.body req.query req.params
            const _suburbsEnum = yield services_1.SuburbEnumService.getSuburbEnum(parseInt(idSuburbEnum));
            res.json({ length: _suburbsEnum.length, recordset: _suburbsEnum });
        });
    }
    static createSuburbEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let suburbEnum = req.body;
            const _createdSuburbEnum = yield services_1.SuburbEnumService.createSuburbEnum(suburbEnum);
            let suc;
            if (_createdSuburbEnum.affectedRows < 1) {
                _createdSuburbEnum.message = "SuburbEnum was not created";
                suc = false;
            }
            else {
                _createdSuburbEnum.message = "SuburbEnum was created";
                suc = true;
            }
            res.json({ success: suc, createdSuburbEnum: _createdSuburbEnum });
        });
    }
    static updateSuburbEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idSuburbEnum } = req.params;
            let suburbEnum = req.body;
            const _updateSuburbEnum = yield services_1.SuburbEnumService.updateSuburbEnum(parseInt(idSuburbEnum), suburbEnum);
            let suc;
            if (_updateSuburbEnum.affectedRows < 1) {
                _updateSuburbEnum.message = 'the SuburbEnum was not updated ';
                suc = false;
            }
            else {
                _updateSuburbEnum.message = 'the SuburbEnum was updated ';
                suc = true;
            }
            res.json({ success: suc, updateSuburbEnum: _updateSuburbEnum });
        });
    }
    static deleteSuburbEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idSuburbEnum } = req.params;
            const _deleteSuburbEnum = yield services_1.SuburbEnumService.deleteSuburbEnum(parseInt(idSuburbEnum));
            let suc;
            if (_deleteSuburbEnum.affectedRows < 1) {
                _deleteSuburbEnum.message = 'the SuburbEnum was not deleted ';
                suc = false;
            }
            else {
                _deleteSuburbEnum.message = 'the SuburbEnum was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteSuburbEnum: _deleteSuburbEnum });
        });
    }
}
exports.SuburbEnumController = SuburbEnumController;
