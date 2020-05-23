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
class ProductService {
    static listProduct(name, fkStore, fkCategoryEnum) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM product WHERE ";
            sql += name != null ? "name = " + name + " AND " : "";
            sql += fkStore != null ? "fkStore = '" + fkStore + "' AND " : "";
            sql += fkCategoryEnum != null ? "fkCategoryEnum = '" + fkCategoryEnum + "' AND " : "";
            sql += "1 = 1 ";
            console.log(sql);
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static getProduct(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "SELECT * FROM product WHERE ";
            sql += idProduct != null ? "idProduct = " + idProduct + " AND " : "";
            sql += "1 = 1 ";
            const recordset = yield database_1.default.query(sql);
            return recordset;
        });
    }
    static createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "INSERT INTO product (name, descripcion, quantityStock, metric, buyPrice, maxCacaoBuyPrice, fkStore, fkCategoryEnum) " +
                "VALUES ('" + product.name + "', '" +
                product.description + "', " +
                product.quantityInStock + ", " +
                product.metric + ", " +
                product.buyPrice + ", " +
                product.maxCacaoBuyPrice + ", " +
                product.fkStore + ", " +
                product.fkCategoryEnum + ");";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static updateProduct(idProduct, product) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE product SET " +
                "name = '" + product.name + "', " +
                "description = " + product.description + ", " +
                "quantityInStock = " + product.quantityInStock + ", " +
                "metric = " + product.metric + ", " +
                "buyPrice = " + product.buyPrice + ", " +
                "maxCacaoBuyPrice = " + product.maxCacaoBuyPrice + ", " +
                "fkStore = " + product.fkStore + ", " +
                "fkStore = " + product.fkCategoryEnum + " " +
                "WHERE idProduct = " + idProduct + ";";
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
    static deleteProduct(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "DELETE FROM product WHERE idProduct = " + idProduct;
            const resultado = yield database_1.default.query(sql);
            return resultado;
        });
    }
}
exports.ProductService = ProductService;
