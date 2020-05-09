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
class PaymentController {
    static listPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPayment, fkClient, fkVendor, fkOrder } = req.body; //req.body req.query req.params
            const _payment = yield services_1.PaymentService.listPayment(idPayment, fkClient, fkVendor, fkOrder);
            res.json({ "length": _payment.length, "recordset": _payment });
        });
    }
    static getPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPayment } = req.params; //req.body req.query req.params
            const _payment = yield services_1.PaymentService.getPayment(parseInt(idPayment));
            res.json({ "length": _payment.length, "recordset": _payment });
        });
    }
    static createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let payment = req.body;
            const _createdPayment = yield services_1.PaymentService.createPayment(payment);
            let suc;
            if (_createdPayment.affectedRows < 1) {
                _createdPayment.message = "Payment was not created";
                suc = false;
            }
            else {
                _createdPayment.message = "Payment was created";
                suc = true;
            }
            res.json({ success: suc, createdPayment: _createdPayment });
        });
    }
    static updatePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPayment } = req.params;
            let payment = req.body;
            const _updatePayment = yield services_1.PaymentService.updatePayment(parseInt(idPayment), payment);
            let suc;
            if (_updatePayment.affectedRows < 1) {
                _updatePayment.message = 'the Payment was not updated ';
                suc = false;
            }
            else {
                _updatePayment.message = 'the Payment was updated ';
                suc = true;
            }
            res.json({ success: suc, updatePayment: _updatePayment });
        });
    }
    static deletePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPayment } = req.params;
            const _deletePayment = yield services_1.PaymentService.deletePayment(parseInt(idPayment));
            let suc;
            if (_deletePayment.affectedRows < 1) {
                _deletePayment.message = 'the Payment was not deleted ';
                suc = false;
            }
            else {
                _deletePayment.message = 'the Payment was deleted ';
                suc = true;
            }
            res.json({ success: suc, deletePayment: _deletePayment });
        });
    }
}
exports.PaymentController = PaymentController;
