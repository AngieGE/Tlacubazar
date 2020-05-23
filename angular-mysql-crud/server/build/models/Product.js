"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(product) {
        this.idProduct = product.idProduct;
        this.name = product.name;
        this.description = product.description;
        this.quantityInStock = product.quantityInStock;
        this.metric = product.metric;
        this.buyPrice = product.buyPrice;
        this.maxCacaoBuyPrice = product.maxCacaoBuyPrice;
        this.fkStore = product.fkStore;
        this.fkCategoryEnum = product.fkCategoryEnum;
    }
}
exports.Product = Product;
