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
class DeliveryMethodController {
    static listDeliveryMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkStore, fkDeliveryMethodEnum } = req.body; //req.body req.query req.params
            const _deliveryMethods = yield services_1.DeliveryMethodService.listDeliveryMethod(fkStore, fkDeliveryMethodEnum);
            res.json({ length: _deliveryMethods.length, recordset: _deliveryMethods });
        });
    }
    static createDeliveryMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let deliveryMethod = req.body;
            const _createdDeliveryMethod = yield services_1.DeliveryMethodService.createDeliveryMethod(deliveryMethod);
            let suc;
            if (_createdDeliveryMethod.affectedRows < 1) {
                _createdDeliveryMethod.message = "DeliveryMethod was not created";
                suc = false;
            }
            else {
                _createdDeliveryMethod.message = "DeliveryMethod was created";
                suc = true;
            }
            res.json({ success: suc, createdDeliveryMethod: _createdDeliveryMethod });
        });
    }
    static deleteDeliveryMethod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkStore, fkDeliveryMethodEnum } = req.params;
            const _deleteDeliveryMethod = yield services_1.DeliveryMethodService.deleteDeliveryMethod(parseInt(fkStore), parseInt(fkDeliveryMethodEnum));
            let suc;
            if (_deleteDeliveryMethod.affectedRows < 1) {
                _deleteDeliveryMethod.message = 'the DeliveryMethod was not deleted ';
                suc = false;
            }
            else {
                _deleteDeliveryMethod.message = 'the DeliveryMethod was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteDeliveryMethod: _deleteDeliveryMethod });
        });
    }
}
exports.DeliveryMethodController = DeliveryMethodController;
