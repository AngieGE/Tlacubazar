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
class OrderDetailsService {
    static listOrderDetails(idOrderDetails, quantityOrdered, fkOrder, fkProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM OrderDetails WHERE ";
            sql += idOrderDetails != null ? "idOrderDetails = " + idOrderDetails + " AND " : "";
            sql += quantityOrdered != null ? "quantityOrdered = " + quantityOrdered + " AND " : "";
            sql += fkOrder != null ? "fkOrder = " + fkOrder + " AND " : "";
            sql += fkProduct != null ? "fkProduct = " + fkProduct + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getOrderDetails(idOrderDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM OrderDetails WHERE ";
            sql += idOrderDetails != null ? "idOrderDetails = " + idOrderDetails + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createOrderDetails(orderDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO OrderDetails (quantityOrdered, fkOrdered, fkProduct) " +
                "VALUES ('" + orderDetails.quantityOrdered + "', '" +
                orderDetails.fkOrder + "', " +
                orderDetails.fkProduct + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateOrderDetails(idOrderDetails, orderDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE OrderDetails SET " +
                "quantityOrdered = '" + orderDetails.quantityOrdered + "', " +
                "fkOrder = '" + orderDetails.fkOrder + "' " +
                "fkProduct = '" + orderDetails.fkProduct + "' " +
                "WHERE idOrderDetails = " + idOrderDetails + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteOrderDetails(idOrderDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM OrderDetails WHERE idOrderDetails = " + idOrderDetails;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.OrderDetailsService = OrderDetailsService;
