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
class OrderController {
    static listOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrder, fkStatusEnum, fkUser } = req.query; //req.body req.query req.params
            const _Order = yield services_1.OrderService.listOrder(idOrder, fkStatusEnum, fkUser);
            res.json({ length: _Order.length, recordset: _Order });
        });
    }
    static getOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrder } = req.params; //req.body req.query req.params
            const _Order = yield services_1.OrderService.getOrder(parseInt(idOrder));
            res.json({ length: _Order.length, recordset: _Order });
        });
    }
    static createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let order = req.body;
            const _createdOrder = yield services_1.OrderService.createOrder(order);
            let suc;
            if (_createdOrder.affectedRows < 1) {
                _createdOrder.message = "Order was not created";
                suc = false;
            }
            else {
                _createdOrder.message = "Order was created";
                suc = true;
            }
            res.json({ success: suc, createdOrder: _createdOrder });
        });
    }
    static updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrder } = req.params;
            let order = req.body;
            const _updateOrder = yield services_1.OrderService.updateOrder(parseInt(idOrder), order);
            let suc;
            if (_updateOrder.affectedRows < 1) {
                _updateOrder.message = 'the Order was not updated ';
                suc = false;
            }
            else {
                _updateOrder.message = 'the Order was updated ';
                suc = true;
            }
            res.json({ success: suc, updateOrder: _updateOrder });
        });
    }
    static deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrder } = req.params;
            const _deleteOrder = yield services_1.OrderService.deleteOrder(parseInt(idOrder));
            let suc;
            if (_deleteOrder.affectedRows < 1) {
                _deleteOrder.message = 'the Order was not deleted ';
                suc = false;
            }
            else {
                _deleteOrder.message = 'the Order was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteOrder: _deleteOrder });
        });
    }
}
exports.OrderController = OrderController;
