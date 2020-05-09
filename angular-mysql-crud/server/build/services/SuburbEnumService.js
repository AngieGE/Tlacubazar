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
class SuburbEnumService {
    static listSuburbEnum(idSuburbEnum, suburb, postalCode, fkCityEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM suburbEnum WHERE ";
            sql += idSuburbEnum != null ? "idSuburbEnum = " + idSuburbEnum + " AND " : "";
            sql += suburb != null ? "suburb = '" + suburb + "' AND " : "";
            sql += postalCode != null ? "postalCode = " + postalCode + " AND " : "";
            sql += fkCityEnum != null ? "fkCityEnum = " + fkCityEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getSuburbEnum(idSuburbEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM suburbEnum WHERE ";
            sql += idSuburbEnum != null ? "idSuburbEnum = " + idSuburbEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createSuburbEnum(suburbEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO suburbEnum (suburb, postalCode, fkCityEnum) " +
                "VALUES ('" + suburbEnum.suburb + "', " +
                suburbEnum.postalCode + ", " +
                suburbEnum.fkCityEnum + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateSuburbEnum(idSuburbEnum, suburbEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE suburbEnum SET " +
                "suburb = '" + suburbEnum.suburb + "', " +
                "postalCode = '" + suburbEnum.postalCode + "', " +
                "fkCityEnum = '" + suburbEnum.fkCityEnum + "' " +
                "WHERE idSuburbEnum = " + idSuburbEnum + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteSuburbEnum(idSuburbEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM suburbEnum WHERE idSuburbEnum = " + idSuburbEnum;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.SuburbEnumService = SuburbEnumService;
