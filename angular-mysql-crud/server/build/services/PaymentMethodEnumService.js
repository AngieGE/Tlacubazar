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
class PaymentMethodEnumService {
    static listPaymentMethodEnum(idPaymentMethodEnum, paymentMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM PaymentMethodEnum WHERE ";
            sql += idPaymentMethodEnum != null ? "idPaymentMethodEnum = " + idPaymentMethodEnum + " AND " : "";
            sql += paymentMethod != null ? "paymentMethod = '" + paymentMethod + "' AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createPaymentMethodEnum(paymentMethodEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO paymentMethodEnum ( paymentMethod) " +
                "VALUES ('" + paymentMethodEnum.paymentMethod + "');";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deletePaymentMethodEnum(idPaymentMethodEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM paymentMethodEnum WHERE idPaymentMethodEnum = " + idPaymentMethodEnum + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.PaymentMethodEnumService = PaymentMethodEnumService;
