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
            const { usuario } = req.query;
            const _usuarios = yield UserService_1.UserService.listUser(usuario);
            res.json(_usuarios);
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const createdUser = yield UserService_1.UserService.createUser(user);
            res.json(createdUser);
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            let user = req.body;
            yield UserService_1.UserService.updateUser(parseInt(idUser), user);
            res.json({ 'message': 'the usuario was updated ' });
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser } = req.params;
            yield UserService_1.UserService.deleteUser(parseInt(idUser));
            res.json({ 'message': 'the usuarios was deleted' });
        });
    }
}
exports.UserController = UserController;
