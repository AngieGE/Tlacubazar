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
class OrderDetailsController {
    static listOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderDetails, quantityOrdered, fkOrder, fkProduct } = req.body; //req.body req.query req.params
            const _orderDetails = yield services_1.OrderDetailsService.listOrderDetails(idOrderDetails, quantityOrdered, fkOrder, fkProduct);
            res.json({ "length": _orderDetails.length, "recordset": _orderDetails });
        });
    }
    static getOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderDetails } = req.params; //req.body req.query req.params
            const _orderDetails = yield services_1.OrderDetailsService.getOrderDetails(parseInt(idOrderDetails));
            res.json({ "length": _orderDetails.length, "recordset": _orderDetails });
        });
    }
    static createOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let orderDetails = req.body;
            const _createdOrderDetails = yield services_1.OrderDetailsService.createOrderDetails(orderDetails);
            let suc;
            if (_createdOrderDetails.affectedRows < 1) {
                _createdOrderDetails.message = "OrderDetails was not created";
                suc = false;
            }
            else {
                _createdOrderDetails.message = "OrderDetails was created";
                suc = true;
            }
            res.json({ success: suc, createdOrderDetails: _createdOrderDetails });
        });
    }
    static updateOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderDetails } = req.params;
            let OrderDetails = req.body;
            const _updateOrderDetails = yield services_1.OrderDetailsService.updateOrderDetails(parseInt(idOrderDetails), OrderDetails);
            let suc;
            if (_updateOrderDetails.affectedRows < 1) {
                _updateOrderDetails.message = 'the OrderDetails was not updated ';
                suc = false;
            }
            else {
                _updateOrderDetails.message = 'the OrderDetails was updated ';
                suc = true;
            }
            res.json({ success: suc, updateOrderDetails: _updateOrderDetails });
        });
    }
    static deleteOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderDetails } = req.params;
            const _deleteOrderDetails = yield services_1.OrderDetailsService.deleteOrderDetails(parseInt(idOrderDetails));
            let suc;
            if (_deleteOrderDetails.affectedRows < 1) {
                _deleteOrderDetails.message = 'the OrderDetails was not deleted ';
                suc = false;
            }
            else {
                _deleteOrderDetails.message = 'the OrderDetails was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteOrderDetails: _deleteOrderDetails });
        });
    }
}
exports.OrderDetailsController = OrderDetailsController;
