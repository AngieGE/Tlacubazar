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
class OrderProductController {
    static listOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderProduct, fkUser, fkProduct } = req.query; //req.body req.query req.params
            const _orderProduct = yield services_1.OrderProductService.listOrderProduct(idOrderProduct, fkUser, fkProduct);
            res.json({ length: _orderProduct.length, recordset: _orderProduct });
        });
    }
    static getOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderProduct } = req.query; //req.body req.query req.params
            const _orderProduct = yield services_1.OrderProductService.getOrderProduct(parseInt(idOrderProduct));
            res.json({ length: _orderProduct.length, recordset: _orderProduct });
        });
    }
    static createOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let orderProduct = req.body;
            const _createdOrderProduct = yield services_1.OrderProductService.createOrderProduct(orderProduct);
            let suc;
            if (_createdOrderProduct.affectedRows < 1) {
                _createdOrderProduct.message = "OrderProduct was not created";
                suc = false;
            }
            else {
                _createdOrderProduct.message = "OrderProduct was created";
                suc = true;
            }
            res.json({ success: suc, createdOrderProduct: _createdOrderProduct });
        });
    }
    static updateOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderProduct } = req.params;
            let orderProduct = req.body;
            const _updateOrderProduct = yield services_1.OrderProductService.updateOrderProduct(parseInt(idOrderProduct), orderProduct);
            let suc;
            if (_updateOrderProduct.affectedRows < 1) {
                _updateOrderProduct.message = 'the OrderProduct was not updated ';
                suc = false;
            }
            else {
                _updateOrderProduct.message = 'the OrderProduct was updated ';
                suc = true;
            }
            res.json({ success: suc, updateOrderProduct: _updateOrderProduct });
        });
    }
    static deleteOrderProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idOrderProduct } = req.params;
            const _deleteOrderProduct = yield services_1.OrderProductService.deleteOrderProduct(parseInt(idOrderProduct));
            let suc;
            if (_deleteOrderProduct.affectedRows < 1) {
                _deleteOrderProduct.message = 'the OrderProduct was not deleted ';
                suc = false;
            }
            else {
                _deleteOrderProduct.message = 'the OrderProduct was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteOrderProduct: _deleteOrderProduct });
        });
    }
}
exports.OrderProductController = OrderProductController;
