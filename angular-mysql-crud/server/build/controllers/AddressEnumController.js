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
class AddressEnumController {
    static listAddressEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddressEnum, address } = req.body; //req.body req.query req.params
            const _addressesEnum = yield services_1.AddressEnumService.listAddressEnum(idAddressEnum, address);
            res.json({ length: _addressesEnum.length, recordset: _addressesEnum });
        });
    }
    static getAddressEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddressEnum } = req.params; //req.body req.query req.params
            const _addressesEnum = yield services_1.AddressEnumService.getAddressEnum(parseInt(idAddressEnum));
            res.json({ length: _addressesEnum.length, recordset: _addressesEnum });
        });
    }
    static createAddressEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let addressEnum = req.body;
            const _createdAddressEnum = yield services_1.AddressEnumService.createAddressEnum(addressEnum);
            let suc;
            if (_createdAddressEnum.affectedRows < 1) {
                _createdAddressEnum.message = "addressEnum was not created";
                suc = false;
            }
            else {
                _createdAddressEnum.message = "addressEnum was created";
                suc = true;
            }
            res.json({ success: suc, createdAddressEnum: _createdAddressEnum });
        });
    }
    static updateAddressEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddressEnum } = req.params;
            let addressEnum = req.body;
            const _updateAddressEnum = yield services_1.AddressEnumService.updateAddressEnum(parseInt(idAddressEnum), addressEnum);
            let suc;
            if (_updateAddressEnum.affectedRows < 1) {
                _updateAddressEnum.message = 'the AddressEnum was not updated ';
                suc = false;
            }
            else {
                _updateAddressEnum.message = 'the AddressEnum was updated ';
                suc = true;
            }
            res.json({ success: suc, updateAddressEnum: _updateAddressEnum });
        });
    }
    static deleteAddressEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddressEnum } = req.params;
            const _deleteAddressEnum = yield services_1.AddressEnumService.deleteAddressEnum(parseInt(idAddressEnum));
            let suc;
            if (_deleteAddressEnum.affectedRows < 1) {
                _deleteAddressEnum.message = 'the AddressEnum was not deleted ';
                suc = false;
            }
            else {
                _deleteAddressEnum.message = 'the AddressEnum was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteAddressEnum: _deleteAddressEnum });
        });
    }
}
exports.AddressEnumController = AddressEnumController;
