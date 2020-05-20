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
class UserAddressController {
    static listUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkUser, fkAddress } = req.query; //req.body req.query req.params
            const _UserAddress = yield services_1.UserAddressService.listUserAddress(fkUser, fkAddress);
            res.json({ length: _UserAddress.length, recordset: _UserAddress });
        });
    }
    static createUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userAddress = req.body;
            const _createdUserAddress = yield services_1.UserAddressService.createUserAddress(userAddress);
            let suc;
            if (_createdUserAddress.affectedRows < 1) {
                _createdUserAddress.message = "UserAddress was not created";
                suc = false;
            }
            else {
                _createdUserAddress.message = "UserAddress was created";
                suc = true;
            }
            res.json({ success: suc, createdUserAddress: _createdUserAddress });
        });
    }
    static deleteUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkAddress, fkUser } = req.params;
            console.log(req.params);
            const _deleteUserAddress = yield services_1.UserAddressService.deleteUserAddress(parseInt(fkUser), parseInt(fkAddress));
            let suc;
            if (_deleteUserAddress.affectedRows < 1) {
                _deleteUserAddress.message = 'the UserAddress was not deleted ';
                suc = false;
            }
            else {
                _deleteUserAddress.message = 'the UserAddress was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteUserAddress: _deleteUserAddress });
        });
    }
}
exports.UserAddressController = UserAddressController;
