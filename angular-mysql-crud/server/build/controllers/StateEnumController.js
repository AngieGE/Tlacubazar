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
class StateEnumController {
    static listStateEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStateEnum, state } = req.query; //req.body req.query req.params
            const _statesEnum = yield services_1.StateEnumService.listStateEnum(idStateEnum, state);
            res.json({ length: _statesEnum.length, recordset: _statesEnum });
        });
    }
    static getStateEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStateEnum } = req.params; //req.body req.query req.params
            const _statesEnum = yield services_1.StateEnumService.getStateEnum(parseInt(idStateEnum));
            res.json({ length: _statesEnum.length, recordset: _statesEnum });
        });
    }
    static createStateEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let stateEnum = req.body;
            const _createdStateEnum = yield services_1.StateEnumService.createStateEnum(stateEnum);
            let suc;
            if (_createdStateEnum.affectedRows < 1) {
                _createdStateEnum.message = "StateEnum was not created";
                suc = false;
            }
            else {
                _createdStateEnum.message = "StateEnum was created";
                suc = true;
            }
            res.json({ success: suc, createdStateEnum: _createdStateEnum });
        });
    }
    static updateStateEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStateEnum } = req.params;
            let stateEnum = req.body;
            const _updateStateEnum = yield services_1.StateEnumService.updateStateEnum(parseInt(idStateEnum), stateEnum);
            let suc;
            if (_updateStateEnum.affectedRows < 1) {
                _updateStateEnum.message = 'the StateEnum was not updated ';
                suc = false;
            }
            else {
                _updateStateEnum.message = 'the StateEnum was updated ';
                suc = true;
            }
            res.json({ success: suc, updateStateEnum: _updateStateEnum });
        });
    }
    static deleteStateEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStateEnum } = req.params;
            const _deleteStateEnum = yield services_1.StateEnumService.deleteStateEnum(parseInt(idStateEnum));
            let suc;
            if (_deleteStateEnum.affectedRows < 1) {
                _deleteStateEnum.message = 'the StateEnum was not deleted ';
                suc = false;
            }
            else {
                _deleteStateEnum.message = 'the StateEnum was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteStateEnum: _deleteStateEnum });
        });
    }
}
exports.StateEnumController = StateEnumController;
