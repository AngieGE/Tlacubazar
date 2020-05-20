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
class OrderService {
    static listOrder(idOrder, fkStatusEnum, fkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM `order` WHERE ";
            sql += idOrder != null ? "idOrder = " + idOrder + " AND " : "";
            sql += fkStatusEnum != null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
            sql += fkUser != null ? "fkUser = " + fkUser + " AND " : "";
            sql += "1 = 1; ";
            console.log("--------------------------------");
            console.log(sql);
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getOrder(idOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM Order WHERE ";
            sql += idOrder != null ? "idOrder = " + idOrder + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO order ( fkStatusEnum, comments, totalPrice, totalMaxCacaoPrice, fkUser, fkProduct) VALUES ( " +
                order.fkStatusEnum + ", '" +
                order.comments + "', " +
                order.totalPrice + ", " +
                order.totalMaxCacaoPrice + ", " +
                order.fkUser + ", " +
                order.fkProduct + ");";
            console.log(sql);
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateOrder(idOrder, order) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE Order SET " +
                "orderDate = '" + ((_a = order.orderDate) === null || _a === void 0 ? void 0 : _a.toISOString()) + "', " +
                "fkStatusEnum = '" + order.fkStatusEnum + "' " +
                "comments = '" + order.comments + "' " +
                "totalPrice = '" + order.totalPrice + "' " +
                "totalMaxCacaoPrice = '" + order.totalMaxCacaoPrice + "' " +
                "fkUser = '" + order.fkUser + "' " +
                "WHERE idOrder = " + idOrder + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteOrder(idOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM Order WHERE idOrder = " + idOrder;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.OrderService = OrderService;
