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
const UserService_1 = require("../services/UserService");
class UserController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = req.query;
            const _user = yield UserService_1.UserService.login(userName, password);
            if (_user == null) {
                res.json({ message: 'the user is not valid ', user: null });
            }
            else {
                res.json({ message: 'the user is valid', user: _user });
            }
        });
    }
    static listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser, isVendor, firsName, lastName } = req.body; //req.body req.query req.params
            const _usuarios = yield UserService_1.UserService.listUser(idUser, isVendor, firsName, lastName);
            res.json({ length: _usuarios.length, recordset: _usuarios });
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params; //req.body req.query req.params
            const _usuario = yield UserService_1.UserService.getUser(parseInt(idUser));
            res.json({ recordset: _usuario });
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const _createdUser = yield UserService_1.UserService.createUser(user);
            let suc;
            if (_createdUser.affectedRows < 1) {
                _createdUser.message = "user was not created";
                suc = false;
            }
            else {
                _createdUser.message = "user was created";
                suc = true;
            }
            res.json({ success: suc, createdUser: _createdUser });
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            let user = req.body;
            const _updateUser = yield UserService_1.UserService.updateUser(parseInt(idUser), user);
            let suc;
            if (_updateUser.affectedRows < 1) {
                _updateUser.message = 'the user was not updated ';
                suc = false;
            }
            else {
                _updateUser.message = 'the user was updated ';
                suc = true;
            }
            res.json({ success: suc, updateUser: _updateUser });
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            const _deleteUser = yield UserService_1.UserService.deleteUser(parseInt(idUser));
            let suc;
            if (_deleteUser.affectedRows < 1) {
                _deleteUser.message = 'the user was not deleted ';
                suc = false;
            }
            else {
                _deleteUser.message = 'the user was deleted ';
                suc = true;
            }
            res.json({ success: suc, deleteUserUser: _deleteUser });
        });
    }
}
exports.UserController = UserController;
