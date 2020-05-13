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
class StoreService {
    static listStore(isServiceStore, acceptsCacao, fkStatusEnum, fkVendor, fkCategoryEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM store WHERE ";
            sql += (isServiceStore != null || isServiceStore != NaN) ? "isServiceStore = " + isServiceStore + " AND " : "";
            sql += acceptsCacao != null ? "acceptsCacao = " + acceptsCacao + " AND " : "";
            sql += fkStatusEnum != null ? "fkStatusEnum = " + fkStatusEnum + " AND " : "";
            sql += fkVendor != null ? "fkVendor = " + fkVendor + " AND " : "";
            sql += fkCategoryEnum != null ? "fkCategoryEnum = " + fkCategoryEnum + " AND " : "";
            sql += "1 = 1 ";
            console.log(sql);
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getStore(idStore) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM store WHERE ";
            sql += idStore != null ? "idStore = " + idStore + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createStore(store) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO store (name, description, fkAddress, isServiceStore, acceptsCacao, fkStatusEnum, fkVendor, fkCategoryEnum) " +
                "VALUES ('" + store.name + "', '" +
                store.description + "', '" +
                store.fkAddress + "', '" +
                store.isServiceStore + "', '" +
                store.acceptsCacao + "', '" +
                store.fkStatusEnum + "', '" +
                store.fkVendor + "', '" +
                store.fkCategoryEnum + "');";
            const resultado = yield database_1.default.query(sql);
            console.log(resultado);
            return resultado;
        });
    }
    static updateStore(idStore, store) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE store SET " +
                "name = '" + store.name + "', " +
                "fkAddress = '" + store.fkAddress + "', " +
                "isServiceStore = '" + store.isServiceStore + "', " +
                "acceptsCacao = " + store.acceptsCacao + ", " +
                "fkStatusEnum = '" + store.fkStatusEnum + "', " +
                "fkVendor = " + store.fkVendor + ", " +
                "fkVendor = " + store.fkCategoryEnum + " " +
                "WHERE idStore = " + idStore + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteStore(idStore) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM store WHERE idStore = " + idStore;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.StoreService = StoreService;
