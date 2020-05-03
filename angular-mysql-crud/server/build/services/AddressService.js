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
class AddressService {
    static listAddress(idAddress, fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM address WHERE ";
            sql += idAddress != null ? "idAddress = " + idAddress + " AND " : "";
            sql += fkAddressEnum != null ? "fkAddressEnum = " + fkAddressEnum + " AND " : "";
            sql += fkStateEnum != null ? "fkStateEnum = " + fkStateEnum + " AND " : "";
            sql += fkCityEnum != null ? "fkCityEnum = " + fkCityEnum + " AND " : "";
            sql += fkSuburbEnum != null ? "fkSuburbEnum = " + fkSuburbEnum + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO address (fkAddressEnum, fkStateEnum, fkCityEnum, fkSuburbEnum) " +
                "VALUES ('" + address.fkAddressEnum + "', '" +
                address.fkStateEnum + "', '" +
                address.fkCityEnum + "', '" +
                address.fkSuburbEnum + "');";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateAddress(idAddress, address) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE address SET " +
                "fkAddressEnum = '" + address.fkAddressEnum + "', " +
                "fkStateEnum = '" + address.fkStateEnum + "', " +
                "fkCityEnum = '" + address.fkCityEnum + "', " +
                "fkSuburbEnum = " + address.fkSuburbEnum + " " +
                "WHERE idAddress = " + idAddress + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteAddress(idAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM address WHERE idAddress = " + idAddress;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.AddressService = AddressService;
