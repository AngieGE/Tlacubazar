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
class StoreReviewController {
    static listStoreReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fkStore, fkUser } = req.body; //req.body req.query req.params
            const _StoreReview = yield services_1.StoreReviewService.listStoreReview(fkStore, fkUser);
            res.json({ length: _StoreReview.length, recordset: _StoreReview });
        });
    }
    static getStoreReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStoreReview } = req.params; //req.body req.query req.params
            const _StoreReview = yield services_1.StoreReviewService.getStoreReview(parseInt(idStoreReview));
            res.json({ length: _StoreReview.length, recordset: _StoreReview });
        });
    }
    static createStoreReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let storeReview = req.body;
            const _createdStoreReview = yield services_1.StoreReviewService.createStoreReview(storeReview);
            let suc;
            if (_createdStoreReview.affectedRows < 1) {
                _createdStoreReview.message = "StoreReview was not created";
                suc = false;
            }
            else {
                _createdStoreReview.message = "StoreReview was created";
                suc = true;
            }
            res.json({ success: suc, createdStoreReview: _createdStoreReview });
        });
    }
    static updateStoreReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStoreReview } = req.params;
            let storeReview = req.body;
            const _updateStoreReview = yield services_1.StoreReviewService.updateStoreReview(parseInt(idStoreReview), storeReview);
            let suc;
            if (_updateStoreReview.affectedRows < 1) {
                _updateStoreReview.message = 'the StoreReview was not updated ';
                suc = false;
            }
            else {
                _updateStoreReview.message = 'the StoreReview was updated ';
                suc = true;
            }
            res.json({ success: suc, updateStoreReview: _updateStoreReview });
        });
    }
    static deleteStoreReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStoreReview } = req.params;
            const _deleteStoreReview = yield services_1.StoreReviewService.deleteStoreReview(parseInt(idStoreReview));
            let suc;
            if (_deleteStoreReview.affectedRows < 1) {
                _deleteStoreReview.message = 'the StoreReview was not deleted ';
                suc = false;
            }
            else {
                _deleteStoreReview.message = 'the StoreReview was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteStoreReview: _deleteStoreReview });
        });
    }
}
exports.StoreReviewController = StoreReviewController;
