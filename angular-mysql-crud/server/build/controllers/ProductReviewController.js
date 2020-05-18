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
class ProductReviewController {
    static listProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkProduct, fkUser } = req.query; //req.body req.query req.params
            const _ProductReview = yield services_1.ProductReviewService.listProductReview(fkProduct, fkUser);
            res.json({ length: _ProductReview.length, recordset: _ProductReview });
        });
    }
    static getProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProductReview } = req.query; //req.body req.query req.params
            const _ProductReview = yield services_1.ProductReviewService.getProductReview(parseInt(idProductReview));
            res.json({ length: _ProductReview.length, recordset: _ProductReview });
        });
    }
    static createProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let productReview = req.body;
            const _createdProductReview = yield services_1.ProductReviewService.createProductReview(productReview);
            let suc;
            if (_createdProductReview.affectedRows < 1) {
                _createdProductReview.message = "ProductReview was not created";
                suc = false;
            }
            else {
                _createdProductReview.message = "ProductReview was created";
                suc = true;
            }
            res.json({ success: suc, createdProductReview: _createdProductReview });
        });
    }
    static updateProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProductReview } = req.params;
            let productReview = req.body;
            const _updateProductReview = yield services_1.ProductReviewService.updateProductReview(parseInt(idProductReview), productReview);
            let suc;
            if (_updateProductReview.affectedRows < 1) {
                _updateProductReview.message = 'the ProductReview was not updated ';
                suc = false;
            }
            else {
                _updateProductReview.message = 'the ProductReview was updated ';
                suc = true;
            }
            res.json({ success: suc, updateProductReview: _updateProductReview });
        });
    }
    static deleteProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProductReview } = req.params;
            const _deleteProductReview = yield services_1.ProductReviewService.deleteProductReview(parseInt(idProductReview));
            let suc;
            if (_deleteProductReview.affectedRows < 1) {
                _deleteProductReview.message = 'the ProductReview was not deleted ';
                suc = false;
            }
            else {
                _deleteProductReview.message = 'the ProductReview was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteProductReview: _deleteProductReview });
        });
    }
}
exports.ProductReviewController = ProductReviewController;
