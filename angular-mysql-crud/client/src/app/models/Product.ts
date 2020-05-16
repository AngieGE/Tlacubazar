import { Store, CategoryEnum } from './index';

export class Product {
    idProduct?: number;
    name?: string;
    description?: string;
    quantityInStock?: number;
    buyPrice?: number;
    maxCacaoBuyPrice?: number;
    fkStore?: number;
    fkCategoryEnum?: number;


    // has
    store: Store;
    categoryEnum: CategoryEnum;

    constructor(product?: Product){
        this.idProduct = product.idProduct;
        this.name = product.name;
        this.description = product.description;
        this.quantityInStock = product.quantityInStock;
        this.buyPrice = product.buyPrice;
        this.maxCacaoBuyPrice = product.maxCacaoBuyPrice;
        this.fkStore = product.fkStore;
        this.fkCategoryEnum = product.fkCategoryEnum;

    }


}
