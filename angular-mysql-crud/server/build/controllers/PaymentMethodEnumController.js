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
class PaymentMethodController {
    static listPaymentMethodEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPaymentMethodEnum, paymentMethod } = req.body; //req.body req.query req.params
            const _PaymentMethods = yield services_1.PaymentMethodEnumService.listPaymentMethodEnum(idPaymentMethodEnum, paymentMethod);
            res.json({ length: _PaymentMethods.length, recordset: _PaymentMethods });
        });
    }
    static createPaymentMethodEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let paymentMethodEnum = req.body;
            const _createdPaymentMethod = yield services_1.PaymentMethodEnumService.createPaymentMethodEnum(paymentMethodEnum);
            let suc;
            if (_createdPaymentMethod.affectedRows < 1) {
                _createdPaymentMethod.message = "PaymentMethod was not created";
                suc = false;
            }
            else {
                _createdPaymentMethod.message = "PaymentMethod was created";
                suc = true;
            }
            res.json({ success: suc, createdPaymentMethodEnum: _createdPaymentMethod });
        });
    }
    static deletePaymentMethodEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkPaymentMethodEnum } = req.params;
            const _deletePaymentMethod = yield services_1.PaymentMethodEnumService.deletePaymentMethodEnum(parseInt(fkPaymentMethodEnum));
            let suc;
            if (_deletePaymentMethod.affectedRows < 1) {
                _deletePaymentMethod.message = 'the PaymentMethod was not deleted ';
                suc = false;
            }
            else {
                _deletePaymentMethod.message = 'the PaymentMethod was deleted ';
                suc = true;
            }
            res.json({ success: suc, deletePaymentMethod: _deletePaymentMethod });
        });
    }
}
exports.PaymentMethodController = PaymentMethodController;
