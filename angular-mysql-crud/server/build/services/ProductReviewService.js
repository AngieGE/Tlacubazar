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
class ProductReviewService {
    static listProductReview(fkProduct, fkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM productReview WHERE ";
            sql += fkProduct != null ? "fkProduct = '" + fkProduct + "' AND " : "";
            sql += fkUser != null ? "fkUser = " + fkUser + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getProductReview(idProductReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM productReview WHERE ";
            sql += idProductReview != null ? "idProductReview = " + idProductReview + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createProductReview(productReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO productReview (stars, review, fkProduct, fkUser ) " +
                "VALUES ('" + productReview.stars + "', '" +
                productReview.review + "', " +
                productReview.fkProduct + ", " +
                productReview.fkUser + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateProductReview(idProductReview, productReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE productReview SET " +
                "stars = '" + productReview.stars + "', " +
                "review = " + productReview.review + " " +
                "fkProduct = " + productReview.fkProduct + " " +
                "fkUser = " + productReview.fkUser + " " +
                "WHERE idProductReview = " + idProductReview + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteProductReview(idProductReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM productReview WHERE idProductReview = " + idProductReview;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.ProductReviewService = ProductReviewService;
