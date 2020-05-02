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
            const { idUser } = req.body; //req.body req.query req.params
            const _usuarios = yield UserService_1.UserService.listUser(idUser);
            res.json({ "length": _usuarios.length, "recordset": _usuarios });
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const createdUser = yield UserService_1.UserService.createUser(user);
            console.log(createdUser);
            res.json(createdUser);
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            let user = req.body;
            const _updateUser = yield UserService_1.UserService.updateUser(parseInt(idUser), user);
            console.log(_updateUser);
            if (_updateUser.affectedRows < 1) {
                _updateUser.message = 'the user was not updated ';
            }
            else {
                _updateUser.message = 'the user was updated ';
            }
            res.json({ updateUser: _updateUser });
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            const _deleteUser = yield UserService_1.UserService.deleteUser(parseInt(idUser));
            console.log(_deleteUser);
            if (_deleteUser.affectedRows < 1) {
                _deleteUser.message = 'the user was not deleted ';
            }
            else {
                _deleteUser.message = 'the user was deleted ';
            }
            res.json({ deleteUserUser: _deleteUser });
        });
    }
}
exports.UserController = UserController;
