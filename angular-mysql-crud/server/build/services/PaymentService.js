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
class PaymentService {
    static listPayment(idPayment, fkClient, fkVendor, fkOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM payment WHERE ";
            sql += idPayment != null ? "idPayment = " + idPayment + " AND " : "";
            sql += fkClient != null ? "fkClient = '" + fkClient + "' AND " : "";
            sql += fkVendor != null ? "fkVendor = " + fkVendor + " AND " : "";
            sql += fkOrder != null ? "fkOrder = " + fkOrder + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getPayment(idPayment) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM payment WHERE ";
            sql += idPayment != null ? "idPayment = " + idPayment + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createPayment(payment) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO payment (paymentDate, amount, cacaoAmount, fkClient, fkVendor, fkOrder) " +
                "VALUES ('" + ((_a = payment.paymentDate) === null || _a === void 0 ? void 0 : _a.toISOString()) + "', '" +
                payment.amount + "', " +
                payment.cacaoAmount + ", " +
                payment.fkClient + ", " +
                payment.fkVendor + ", " +
                payment.fkOrder + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updatePayment(idPayment, payment) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE payment SET " +
                "paymentDate = '" + ((_a = payment.paymentDate) === null || _a === void 0 ? void 0 : _a.toISOString()) + "', " +
                "amount = " + payment.amount + " " +
                "cacaoAmount = " + payment.cacaoAmount + " " +
                "fkClient = " + payment.fkClient + " " +
                "fkVendor = " + payment.fkVendor + " " +
                "fkOrder = " + payment.fkOrder + " " +
                "WHERE idPayment = " + idPayment + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deletePayment(idPayment) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM payment WHERE idPayment = " + idPayment;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.PaymentService = PaymentService;
