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
class StoreController {
    static listStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStore } = req.body; //req.body req.query req.params
            const _stores = yield services_1.StoreService.listStore(idStore);
            res.json({ "length": _stores.length, "recordset": _stores });
        });
    }
    static createStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const _createdStore = yield services_1.StoreService.createStore(user);
            res.json(_createdStore);
        });
    }
    static updateStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStore } = req.params;
            let user = req.body;
            const _updateStore = yield services_1.StoreService.updateStore(parseInt(idStore), user);
            if (_updateStore.affectedRows < 1) {
                _updateStore.message = 'the store was not updated ';
            }
            else {
                _updateStore.message = 'the store was updated ';
            }
            res.json({ updateUser: _updateStore });
        });
    }
    static deleteStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStore } = req.params;
            const _deleteStore = yield services_1.StoreService.deleteStore(parseInt(idStore));
            if (_deleteStore.affectedRows < 1) {
                _deleteStore.message = 'the store was not deleted ';
            }
            else {
                _deleteStore.message = 'the store was deleted ';
            }
            res.json({ deleteUserUser: _deleteStore });
        });
    }
}
exports.StoreController = StoreController;
