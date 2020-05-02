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
    static listStore(idStore) {
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
            let sql = "INSERT INTO store (name, fkAddress, isServiceStore, acceptsCacao, status, fkVendor) " +
                "VALUES ('" + store.name + "', '" +
                store.fkAddress + "', '" +
                store.isServiceStore + "', '" +
                store.acceptsCacao + "', '" +
                store.status + "', '" +
                store.fkVendor + "');";
            const resultado = yield database_1.default.query(sql);
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
                "status = '" + store.status + "', " +
                "fkVendor = " + store.fkVendor + " " +
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
