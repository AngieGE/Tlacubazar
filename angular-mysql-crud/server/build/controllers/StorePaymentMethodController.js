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
class StorePaymentMethodController {
    static listStorePaymentMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkStore, fkPaymentMethodEnum } = req.query; //req.body req.query req.params
            const _StorePaymentMethod = yield services_1.StorePaymentMethodService.listStorePaymentMethod(fkStore, fkPaymentMethodEnum);
            res.json({ length: _StorePaymentMethod.length, recordset: _StorePaymentMethod });
        });
    }
    static createStorePaymentMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let storePaymentMethod = req.body;
            const _createdStorePaymentMethod = yield services_1.StorePaymentMethodService.createStorePaymentMethod(storePaymentMethod);
            let suc;
            if (_createdStorePaymentMethod.affectedRows < 1) {
                _createdStorePaymentMethod.message = "StorePaymentMethod was not created";
                suc = false;
            }
            else {
                _createdStorePaymentMethod.message = "StorePaymentMethod was created";
                suc = true;
            }
            res.json({ success: suc, createdStorePaymentMethod: _createdStorePaymentMethod });
        });
    }
    static deleteStorePaymentMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkStore, fkPaymentMethodEnum } = req.params;
            console.log(req.params);
            const _deleteStorePaymentMethod = yield services_1.StorePaymentMethodService.deleteStorePaymentMethod(parseInt(fkStore), parseInt(fkPaymentMethodEnum));
            let suc;
            if (_deleteStorePaymentMethod.affectedRows < 1) {
                _deleteStorePaymentMethod.message = 'the StorePaymentMethod was not deleted ';
                suc = false;
            }
            else {
                _deleteStorePaymentMethod.message = 'the StorePaymentMethod was deleted ';
                suc = true;
            }
            res.json({ success: suc, deletedStorePaymentMethod: _deleteStorePaymentMethod });
        });
    }
}
exports.StorePaymentMethodController = StorePaymentMethodController;
