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
class OrderProductService {
    static listOrderProduct(idOrderProduct, fkUser, fkProduct, fkStatusEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM orderProduct WHERE ";
            sql += idOrderProduct != null ? "idOrderProduct = " + idOrderProduct + " AND " : "";
            sql += fkUser != null ? "fkUser = " + fkUser + " AND " : "";
            sql += fkProduct != null ? "fkProduct = " + fkProduct + " AND " : "";
            sql += fkStatusEnum != null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getOrderProduct(idOrderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM orderProduct WHERE ";
            sql += idOrderProduct != null ? "idOrderProduct = " + idOrderProduct + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createOrderProduct(orderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO orderProduct (amount, fkUser, fkProduct) " +
                "VALUES ('" + orderProduct.amount + "', '" +
                orderProduct.fkUser + "', " +
                orderProduct.fkProduct + ");";
            console.log(sql);
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateOrderProduct(idOrderProduct, orderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE orderProduct SET " +
                "cacaoAmount = '" + orderProduct.cacaoAmount + "', " +
                "amount = '" + orderProduct.amount + "', " +
                // "date = '" + orderProduct.date?.toDateString() + "', " + 
                "fkUser = '" + orderProduct.fkUser + "', " +
                "fkProduct = '" + orderProduct.fkProduct + "', " +
                "fkStatusEnum = '" + orderProduct.fkStatusEnum + "' " +
                "WHERE idOrderProduct = " + idOrderProduct + ";";
            console.log(sql);
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteOrderProduct(idOrderProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM orderProduct WHERE idOrderProduct = " + idOrderProduct;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.OrderProductService = OrderProductService;
