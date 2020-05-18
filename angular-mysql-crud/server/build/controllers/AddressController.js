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
class AddressController {
    static listAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddress, fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum } = req.query; //req.body req.query req.params
            const _addresses = yield services_1.AddressService.listAddress(idAddress, fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum);
            res.json({ length: _addresses.length, recordset: _addresses });
        });
    }
    static getAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddress } = req.query; //req.body req.query req.params
            const _address = yield services_1.AddressService.getAddress(parseInt(idAddress));
            res.json({ length: _address.length, recordset: _address });
        });
    }
    static createAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let address = req.body;
            const _createdAddress = yield services_1.AddressService.createAddress(address);
            let suc;
            if (_createdAddress.affectedRows < 1) {
                _createdAddress.message = "address was not created";
                suc = false;
            }
            else {
                _createdAddress.message = "address was created";
                suc = true;
            }
            res.json({ success: suc, createdAddress: _createdAddress });
        });
    }
    static updateAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddress } = req.query;
            let address = req.body;
            const _updateAddress = yield services_1.AddressService.updateAddress(parseInt(idAddress), address);
            let suc;
            if (_updateAddress.affectedRows < 1) {
                _updateAddress.message = 'the Address was not updated ';
                suc = false;
            }
            else {
                _updateAddress.message = 'the Address was updated ';
                suc = true;
            }
            res.json({ success: suc, updateAddress: _updateAddress });
        });
    }
    static deleteAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAddress } = req.query;
            const _deleteAddress = yield services_1.AddressService.deleteAddress(parseInt(idAddress));
            let suc;
            if (_deleteAddress.affectedRows < 1) {
                _deleteAddress.message = 'the Address was not deleted ';
                suc = false;
            }
            else {
                _deleteAddress.message = 'the Address was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteAddress: _deleteAddress });
        });
    }
}
exports.AddressController = AddressController;
