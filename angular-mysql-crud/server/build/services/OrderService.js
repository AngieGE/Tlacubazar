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
    //params are wrong
    static listOrder(idOrder, fkUser, fkStore, fkStatusEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM `order` WHERE ";
            sql += idOrder != null ? "idOrder = " + idOrder + " AND " : "";
            sql += fkUser != null ? "fkUser = " + fkUser + " AND " : "";
            sql += fkStore != null ? "fkStore = " + fkStore + " AND " : "";
            sql += fkStatusEnum != null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
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
            let sql = "INSERT INTO order ( fkUser, fkStore, fkStatusEnum, fkPaymentMethodEnum) VALUES ( " +
                order.fkUser + ", '" +
                order.fkStore + "', " +
                order.fkStatusEnum + ", " +
                order.fkPaymentMethodEnum + ");";
            console.log(sql);
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateOrder(idOrder, order) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE Order SET " +
                "orderDate = '" + new Date() + "', " +
                "comments = '" + order.comments + "' " +
                "fkUser = '" + order.fkUser + "' " +
                "fkStore = '" + order.fkStore + "' " +
                "fkStatusEnum = '" + order.fkStatusEnum + "' " +
                "fkPaymentMethodEnum = '" + order.fkPaymentMethodEnum + "' " +
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
