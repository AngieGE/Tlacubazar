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
class CityEnumService {
    static listCityEnum(idCityEnum, city, fkStateEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM cityEnum WHERE ";
            sql += idCityEnum != null ? "idCityEnum = " + idCityEnum + " AND " : "";
            sql += city != null ? "city = '" + city + "' AND " : "";
            sql += fkStateEnum != null ? "fkStateEnum = " + fkStateEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getCityEnum(idCityEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM cityEnum WHERE ";
            sql += idCityEnum != null ? "idCityEnum = " + idCityEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createCityEnum(CityEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO cityEnum (City, fkStateEnum) " +
                "VALUES ('" + CityEnum.city + "', '" +
                CityEnum.fkStateEnum + "');";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateCityEnum(idCityEnum, cityEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE cityEnum SET " +
                "city = '" + cityEnum.city + "', " +
                "fkStateEnum = '" + cityEnum.fkStateEnum + "' " +
                "WHERE idCityEnum = " + idCityEnum + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteCityEnum(idCityEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM cityEnum WHERE idCityEnum = " + idCityEnum;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.CityEnumService = CityEnumService;
