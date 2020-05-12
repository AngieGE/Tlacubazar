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
class ProductController {
    static listProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProduct, fkStore } = req.body; //req.body req.query req.params
            const _Product = yield services_1.ProductService.listProduct(idProduct, fkStore);
            res.json({ length: _Product.length, recordset: _Product });
        });
    }
    static getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProduct } = req.params; //req.body req.query req.params
            const _Product = yield services_1.ProductService.getProduct(parseInt(idProduct));
            res.json({ length: _Product.length, recordset: _Product });
        });
    }
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = req.body;
            const _createdProduct = yield services_1.ProductService.createProduct(product);
            let suc;
            if (_createdProduct.affectedRows < 1) {
                _createdProduct.message = "Product was not created";
                suc = false;
            }
            else {
                _createdProduct.message = "Product was created";
                suc = true;
            }
            res.json({ success: suc, createdProduct: _createdProduct });
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProduct } = req.params;
            let product = req.body;
            const _updateProduct = yield services_1.ProductService.updateProduct(parseInt(idProduct), product);
            let suc;
            if (_updateProduct.affectedRows < 1) {
                _updateProduct.message = 'the Product was not updated ';
                suc = false;
            }
            else {
                _updateProduct.message = 'the Product was updated ';
                suc = true;
            }
            res.json({ success: suc, updateProduct: _updateProduct });
        });
    }
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProduct } = req.params;
            const _deleteProduct = yield services_1.ProductService.deleteProduct(parseInt(idProduct));
            let suc;
            if (_deleteProduct.affectedRows < 1) {
                _deleteProduct.message = 'the Product was not deleted ';
                suc = false;
            }
            else {
                _deleteProduct.message = 'the Product was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteProduct: _deleteProduct });
        });
    }
}
exports.ProductController = ProductController;
