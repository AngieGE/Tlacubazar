import { Store  } from './Store';
import {  CategoryEnum } from './CategoryEnum';
import {  ProductReview } from './ProductReview';

export class Product {
    idProduct?: number;
    name?: string;
    description?: string;
    image?: string;
    quantityInStock?: number;
    metric?: string;
    buyPrice?: number;
    maxCacaoBuyPrice?: number;
    fkStore?: number;
    fkCategoryEnum?: number;


    // has
    store?: Store;
    categoryEnum?: CategoryEnum;
    productReviews: ProductReview[] = new Array();

    // extra
    isCollapsed = true;
    score: number;
    scoreLenght: number;
    currentRate = 5;

    constructor(product?: Product) {
        this.idProduct = product.idProduct;
        this.name = product.name;
        this.description = product.description;
        this.image = product.image;
        this.quantityInStock = product.quantityInStock;
        this.metric = product.metric;
        this.buyPrice = product.buyPrice;
        this.maxCacaoBuyPrice = product.maxCacaoBuyPrice;
        this.fkStore = product.fkStore;
        this.fkCategoryEnum = product.fkCategoryEnum;
    }


}
