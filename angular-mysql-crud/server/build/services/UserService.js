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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserService {
    static login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM user WHERE userName = '" + userName + "' AND password = '" + password + "';";
            const recordset = yield database_1.default.query(sql);
            return recordset.recordset[0];
        });
    }
    static listUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM user WHERE ";
            sql += idUser != null ? "idUser = " + idUser + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO user (email, firstName, lastName, isVendor, phone, cacaoBalance) " +
                "VALUES ('" + user.email + "', '" +
                user.firstName + "', '" +
                user.lastName + "', '" +
                //user.password + "', '" + 
                user.isVendor + "', '" +
                user.phone + "', '" +
                user.cacaoBalance + "');";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateUser(idUser, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE user SET " +
                "email = '" + user.email + "', " +
                "firstName = '" + user.firstName + "', " +
                "lastName = '" + user.lastName + "', " +
                //"password = '" + user.password +"', '" +  
                "isVendor = " + user.isVendor + ", " +
                "phone = '" + user.phone + "', " +
                "cacaoBalance = " + user.cacaoBalance + " " +
                "WHERE idUser = " + idUser + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM user WHERE idUser = " + idUser;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.UserService = UserService;
