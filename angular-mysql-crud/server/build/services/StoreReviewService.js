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
class StoreReviewService {
    static listStoreReview(fkStore, fkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM storeReview WHERE ";
            sql += fkStore != null ? "fkStore = '" + fkStore + "' AND " : "";
            sql += fkUser != null ? "fkUser = " + fkUser + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getStoreReview(idStoreReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM storeReview WHERE ";
            sql += idStoreReview != null ? "idStoreReview = " + idStoreReview + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createStoreReview(storeReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO StoreReview (stars, review, fkStore, fkUser ) " +
                "VALUES ('" + storeReview.stars + "', '" +
                storeReview.review + "', " +
                storeReview.fkStore + ", " +
                storeReview.fkUser + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateStoreReview(idStoreReview, storeReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE storeReview SET " +
                "stars = '" + storeReview.stars + "', " +
                "review = " + storeReview.review + " " +
                "fkStore = " + storeReview.fkStore + " " +
                "fkUser = " + storeReview.fkUser + " " +
                "WHERE idStoreReview = " + idStoreReview + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteStoreReview(idStoreReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM storeReview WHERE idStoreReview = " + idStoreReview;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.StoreReviewService = StoreReviewService;
